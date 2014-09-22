gantt.directive('ganttJobFlowchart', ['$window', '$document', '$timeout', '_', 'coloured', function ($window, $document, $timeout, _, coloured) {
    var templateLocation = '';
    return {
        restrict: "E",
        link: function($scope, $element, $attrs) {
            templateLocation = $scope.$parent.gantt.ajaxUrl.serverLocation + $scope.$parent.gantt.ajaxUrl.jsLocationPrefix +'template/';
        },
        templateUrl: function (tElement, tAttrs) {
            if (tAttrs.templateUrl === undefined) {
                return templateLocation + "default.flowchart.tmpl.html";
            } else {
                return templateLocation + tAttrs.templateUrl;
            }
        },
        replace: true,
        scope: { job: "=ngModel" },
        controller: ['$scope', '$element', function ($scope, $element) {
            var bodyElement = angular.element($document[0].body);
            var svg = d3.select("#gantt-job-flowchart-svg g");
            var margin = 20;
            var g = new graphlib.CDigraph();
            var renderer = new dagreD3.Renderer();
            var processTasksMap = {}, process_id;
            var processTaskSortable = function(t1, t2) { return t1.foo - t2.foo; };
            var foo = {};
            var tasksMap = $scope.$parent.gantt.tasksMap;
            var process = $scope.$parent.gantt.processesMap;
            var i, j, k, l, m, n, o, p, q, r, colors = {};

            $scope.css = {
                height: '100%'
            };
            var test = $scope.job.tasks;// $scope.$parent.gantt.jobsMap['2044'].tasks;
            for (i = 0, j = test/*$scope.job.tasks*/, l = j.length; i < l; ++i) {
                colors[j[i].id.toString()] = j[i].color;

                if (j[i].process.id in processTasksMap) {
                    // DO NOTHING
                } else {
                    processTasksMap[j[i].process.id] = [];
                }

                if (j[i].isDeleted === true) {
                    // DO NOTHING
                } else {
                    var label = [];
                    var blankLine = "                        ";
                    /*
                     * Job Flow UI
                     * 每一個工序上顯示
                     * 1.  PO# => operation.job.poNo
                     * 2.  PO QTY (Gang的QTY 跟 Card Qty 依照不同工序需求顯示)
                     * PO QTY => operation.job.comboQuantity
                     * Gang QTY, Card Qty => operation.quantity
                     * 3.  Gang# 跟 Job#
                     * Gang# => operation.operation_code
                     * Job# => operation.operation_code
                     * 4.  Job Style  => operation.processingType
                     * 5.  Machine Name => from screen
                     * 6.  Start Time and End time => from screen
                     * 7.  Duration(每個工序所需的工作時間) => from screen
                     * 8.  工序名稱: ex: PT or Mid-Mag, Mid-Lam…等(若無也可) => machine.factoryOperation.displayNames
                     * 9.  目前完成狀態，已完成，執行中跟未開始等 若有Pin也顯示出icon => from screen
                     */
                    label.push('process id: ' + j[i].process.id);
                    label.push('task id: ' + j[i].data.id);
                    label.push('previous task id: ' + j[i].data.previousOperation);
                    label.push('next tasks: ' + j[i].data.nextOperations);
                    label.push("========================");

                    label.push('PO#: ' + j[i].job.poNo);
                    label.push('PO QTY: ' + j[i].job.comboQuantity);
                    label.push(blankLine);

                    var jobStyle = j[i].data.processingType;
                    var operationCodeTitle = '', quantityTitle = '';
                    if (jobStyle === 'GANG') {
                        operationCodeTitle = 'Gang#: ';
                        quantityTitle = 'Gang QTY: ';
                    } else if (jobStyle === 'JOB') {
                        operationCodeTitle = 'Job#: ';
                        quantityTitle = 'Job QTY: ';
                    } else if (jobStyle === 'JOB_FILE') {
                        operationCodeTitle = 'Job file#: ';
                        quantityTitle = 'Job file QTY: ';
                    }
                    label.push('Job Style: ' + j[i].data.processingType);
                    label.push(operationCodeTitle + j[i].data.operationCode);
                    label.push(quantityTitle + j[i].data.quantity);
                    label.push(blankLine);

                    label.push('Run on Machine: ' + j[i].row.description);
                    label.push(blankLine);

                    label.push('Start time: ' + moment(j[i].from).format('YYYY-MM-DD hh:mm'));
                    label.push('Finish time: ' + moment(j[i].to).format('YYYY-MM-DD hh:mm'));
                    label.push('Duration: ' + ((j[i].to - j[i].from) / 1000 / 60 / 60).toFixed(2) + ' (hrs)');
                    label.push(blankLine);

                    label.push('Finished: ' + (j[i].isFinished === true ? 'Y' : 'N'));
                    label.push('Pin: ' + (j[i].isPin === true ? 'Y' : 'N'));
                    label.push('In Processing: ' + (j[i].inProcessing === true ? 'Y' : 'N'));
                    label.push(blankLine);

                    label = label.join("\n");

                    g.addNode(j[i].id.toString(), { label: label, color: j[i].data.color2.replace('0x', '#') });

                    processTasksMap[j[i].process.id].push({
                        id: j[i].id.toString(),
                        previous: j[i].previousOperation,
                        next: j[i].nextOperations,
                        foo: j[i].data.factoryOperation.priority * 1,
                        processId: j[i].process.id * 1,
                        parallel: j[i].isParallel,
                        order: j[i].to.getTime()
                    });
                }
            }

            for (i = 0, k = _.keys(processTasksMap), l = k.length; i < l; ++i) {
                if (processTasksMap[k[i]].length > 0) {
                    g.addNode(k[i].toString(), { label: 'Process ' + k[i].toString() });

                    if (process_id !== k[i]) {
                        if (process_id !== undefined && g.hasNode(process_id + '_last') === false) {
                            g.addNode(process_id + '_last', { label: '' });
                            g.parent(process_id + '_last', process_id.toString());
                        }
                        if (g.hasNode(k[i].toString() + '_first') === false) {
                            g.addNode(k[i].toString() + '_first', { label: '' });
                            g.parent(k[i].toString() + '_first', k[i].toString());
                            process_id = k[i];
                        }
                    }
                }
            }

            for (i = 0, j = test/*$scope.job.tasks*/, l = j.length; i < l; ++i) {
                if (g.hasNode(j[i].id.toString()) && g.hasNode(j[i].process.id.toString())) {
                    g.parent(j[i].id.toString(), j[i].process.id.toString());
                }
            }

            for (i = 0, k = _.keys(processTasksMap), l = k.length; i < l; ++i) {
                if (processTasksMap[k[i]].length > 0) {
                    processTasksMap[k[i]].sort(processTaskSortable);
                    for (m = 0, n = processTasksMap[k[i]], o = n.length; m < o; ++m) {
                        if (k[i] in foo) {
                            foo[k[i]] = _.union(foo[k[i]], [n[m].foo]);
                        } else {
                            foo[k[i]] = [n[m].foo];
                        }
                    }
                }
            }
            for (i = 0, k = _.keys(processTasksMap), l = k.length; i < l; ++i) {
                if (processTasksMap[k[i]].length > 0) {
                    for (m = 0, n = processTasksMap[k[i]], o = n.length; m < o; ++m) {
                        var checkPriority = false;

                        if (foo[k[i]].length === 1 && processTasksMap[k[i]].length > 1) {
                            for (r = 0, p = processTasksMap[k[i]], q = p.length; r < q; ++r) {
                                if (p.parallel === true) {
                                    checkPriority = true;
                                    break;
                                }
                            }
                        }
                        if (checkPriority === true && foo[k[i]].length === 1) {
                            if (g.hasNode(k[i] + '_last')) {
                                g.addEdge(null, n[m].id.toString(), k[i] + '_last', {});
                            }
                            if (g.hasNode(k[i] + '_first') && n[m].foo === n[0].foo) {
                                g.addEdge(null, k[i] + '_first', n[m].id.toString(), {});
                            }
                        } else {
                            if (g.hasNode(n[m].id.toString()) && g.hasNode(n[m].previous)) {
                                g.addEdge(null, n[m].previous, n[m].id.toString(), {});
                                if (n[m].foo === n[o - 1].foo &&
                                    g.hasNode(k[i] + '_last')) {
                                    if (n[m].next.length > 0) {
                                        for(p = 0, q = n[m].next; p < q.length; ++p) {
                                            if (g.hasNode(q[p].toString())) continue;
                                            g.addEdge(null, n[m].id.toString(), k[i] + '_last', {});
                                        }
                                    } else {
                                        var link_last = true;
                                        for(p = 0, q = processTasksMap[n[m].processId]; p < q.length; ++p) {
                                            if (g.hasNode(q[p].id) &&
                                                q[p].previous === n[m].id.toString()
                                                ) {
                                                link_last = false;
                                                break;
                                            }
                                        }
                                        if (link_last) g.addEdge(null, n[m].id.toString(), k[i] + '_last', {});
                                    }
                                }
                            } else if ((n[m].foo === n[0].foo || g.hasNode(n[m].previous) === false) &&
                                g.hasNode(k[i] + '_first')) {
                                g.addEdge(null, k[i] + '_first', n[m].id.toString(), {});
                            }
                        }
                    }
                }
            }

            var findPreviousProcessNode = function(process) {
                var processMap = $scope.$parent.gantt.processesMap, previousProcesses = [];
                if (process === undefined) return [];
                process.previous.sort(function(a, b) { return b - a; });
                for (j = 0, m = process.previous, n = m.length; j < n; ++j) {
                    if (g.hasNode(m[j].toString())) {
                        previousProcesses.push(m[j].toString());
                    } else {
                        previousProcesses = _.union(previousProcesses, findPreviousProcessNode(processMap[m[j]]));
                    }
                }
                return previousProcesses;
            };

            for (i = 0, k = _.keys(processTasksMap), l = k.length; i < l; ++i) {
                if (g.hasNode(k[i].toString() + '_first')) {
                    processTasksMap[k[i]].sort(processTaskSortable);
                    if ((previousProcesses = findPreviousProcessNode(process[k[i]])) !== false &&
                        previousProcesses.length > 0) {
                        for(j = 0, m = previousProcesses, n = m.length; j < n; ++j) {
                            g.addEdge(null, m[j] + '_last', k[i] + '_first', {});
                        }
                    }

                }
            }

            process = undefined;
            processTasksMap = undefined;
            process_id = undefined;
            processTaskSortable = undefined;
            foo = undefined;
            tasksMap = undefined;

            var oldPostRender = renderer.postRender();

            var isComposite = function(graph, u) {
                return 'children' in graph && graph.children(u).length;
            };

            var addLabel = function(node, root, marginX, marginY) {
                // Add the rect first so that it appears behind the label
                var label = node.label;
                var rect = root.append('rect');
                var labelSvg = root.append('g');
                addTextLabel(label,
                             labelSvg,
                             Math.floor(node.labelCols),
                             node.labelCut);

                var bbox = root.node().getBBox();

                labelSvg.attr('transform',
                              'translate(' + (-bbox.width / 2) + ',' + (-bbox.height / 2) + ')');

                var color = node.color !== undefined && node.color !== '' && node.color || '#ffffff';
                var fillColor = coloured.isDarkColoured(color.replace('#', '')) ? '#ffffff' : '#000000';

                root.attr('fill', fillColor);

                rect
                    .attr('rx', 5)
                    .attr('ry', 5)
                    .attr('x', -(bbox.width / 2 + marginX))
                    .attr('y', -(bbox.height / 2 + marginY))
                    .attr('width', bbox.width + 2 * marginX)
                    .attr('height', bbox.height + 2 * marginY)
                    .attr('style', 'fill: ' + color);
            };

            var addTextLabel = function(label, root, labelCols, labelCut) {
                if (labelCut === undefined) labelCut = 'false';
                labelCut = (labelCut.toString().toLowerCase() === 'true');

                var node = root
                    .append('text')
                    .attr('text-anchor', 'left');

                label = label.replace(/\\n/g, '\n');

                var arr = labelCols ? wordwrap(label, labelCols, labelCut) : label;
                arr = arr.split('\n');
                for (var i = 0; i < arr.length; i++) {
                    node
                        .append('tspan')
                        .attr('dy', '1.5em')
                        .attr('x', '1')
                        .text(arr[i]);
                }
            };

            var wordwrap = function(str, width, cut, brk) {
                brk = brk || '\n';
                width = width || 75;
                cut = cut || false;

                if (!str) { return str; }

                var regex = '.{1,' +width+ '}(\\s|$)' + (cut ? '|.{' +width+ '}|.+$' : '|\\S+?(\\s|$)');

                return str.match( new RegExp(regex, 'g') ).join( brk );
            };

            renderer.drawNodes(function (graph, root) {
                var subGraphs = graph.children(null);
                var nodeGroups = root.selectAll('g.cluster')
                    .data(subGraphs, function (sg) { return sg; });

                // Remove any existing cluster data
                nodeGroups.selectAll('*').remove();
                nodeGroups
                    .enter()
                    .append('g')
                    .classed('cluster', true);

                // Draw the nodes for each subgraph inside a group element
                nodeGroups.each(function (sg) {
                    var nodes = graph.nodes().filter(function(u) { return !isComposite(graph, u) && graph.parent(u) === sg; });
                    var cluster = d3.select(this);
                    var svgNodes = cluster
                        .selectAll('g.node')
                        .classed('enter', false)
                        .data(nodes, function(u) { return u; });

                    svgNodes.selectAll('*').remove();

                    svgNodes
                        .enter()
                        .append('g')
                        .style('opacity', 0)
                        .attr('class', 'node enter');

                    svgNodes.each(function(u) { addLabel(graph.node(u), d3.select(this), 10, 10); });
                });

                var svgNodes = root.selectAll('g.node');
                return svgNodes;
            });

            // Whatever margin is used for the clusters needs to be used
            // also as an additive element to node sep
            var clusters_pos = [];
            renderer.postRender(function (graph, root) {

                var superGraph = new graphlib.CDigraph();
                var subGraphs = graph.children(null);
                var nodes = graph.nodes();

                var clusters = root.selectAll('g.cluster');
                clusters.each(function (sg) {
                    var cluster = d3.select(this);
                    var bbox = cluster.node().getBBox();

                    var xPos = -(bbox.width/2 + margin/2);
                    var yPos = -(bbox.height/2 + margin/2);
                    cluster
                        .insert('rect', ':first-child')
                        .attr('id', sg)
                        .attr('x', bbox.x-margin/2)
                        .attr('y', bbox.y-margin/2)
                        .attr('width', bbox.width+margin)
                        .attr('height', bbox.height+margin)
                        .attr('fill', '#ffffff')
                        .attr('stroke', 'black')
                        .attr('stroke-width', '1.5px')
                        .style('opacity', 0.6);
                    clusters_pos.push({id: sg, x: bbox.x-margin/2, y: bbox.y-margin/2, w: bbox.width+margin, h: bbox.height+margin});
                });


                d3.selection.prototype.moveToFront = function() {
                    return this.each(function(){
                        this.parentNode.appendChild(this);
                    });
                };

                var svgEdgeLabels = svg.select('g.edgeLabels');
                var svgEdgePaths = svg.select('g.edgePaths');
                svgEdgeLabels.moveToFront();
                svgEdgePaths.moveToFront();

                oldPostRender(graph, root);
            });

            // renderer.zoom(false);
            renderer.edgeInterpolate('monotone');
            var layout = dagreD3.layout().nodeSep(50).rankSep(100).edgeSep(50).rankDir("LR");
            layout = renderer.layout(layout).run(g, svg);

            if ((layout.graph().width + 40) < $window.innerWidth) {
                d3.select("#gantt-job-flowchart-svg").attr("width", layout.graph().width + 40);
                // transformX = (((layout.graph().width + 24) * 0.6) - (layout.graph().width + 40)) / 2 * -1;
            } else {
                d3.select("#gantt-job-flowchart-svg").attr("width", $window.innerWidth);
                // transformX = ((layout.graph().width + 24) * 0.6 - $window.innerWidth) / 2 * -1;
            }
            if ((layout.graph().height + 40) < $window.innerHeight - 160) {
                d3.select("#gantt-job-flowchart-svg").attr("height", layout.graph().height + 40);
                // transformY = (((layout.graph().height + 24) * 0.6) - (layout.graph().height + 40)) / 2 * -1;
            } else {
                d3.select("#gantt-job-flowchart-svg").attr("height", $window.innerHeight - 160);
                // transformY = ((layout.graph().height + 24) * 0.6 - ($window.innerHeight - 160)) / 2 * -1;
            }

            var transformX = 0, transformY = 0, scale = ($window.innerWidth / layout.graph().width);
            scale = scale < 0.1 ? scale * 10 : scale > 1 ? 1 : scale;

            var tempPosX = 0, tempPosY = 0;
            for (i = 0, k = clusters_pos, m = k.length; i < m; i++) {
                if (k[i].h > tempPosY) {
                    tempPosY = k[i].h;
                    tempPosX = Math.abs(k[i].x - k[i].w);
                }
            }
            transformY = ((tempPosY * scale) / 2) * -1 + ($window.innerHeight / 2);
            transformX = tempPosX * -1 * scale + ($window.innerWidth / 2);

            svg.attr('transform', 'translate(' + transformX + ',' + transformY + ') scale('+ scale +')');
        }]
    };
}]);
