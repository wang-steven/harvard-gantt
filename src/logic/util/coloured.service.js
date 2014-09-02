gantt.service('coloured', [function() {
	return {

		/**
		 * use YUV color space to determines color is dark or light
		 * @param  {[type]}  colorHexCode
		 * @return {Boolean} true: dark coloured, false: light coloured
		 */
		isDarkColoured: function(colorHexCode) {
			// convert hex color to RGB Colorspace
			var R = parseInt(colorHexCode.substr(1, 2), 16);
			var G = parseInt(colorHexCode.substr(3, 2), 16);
			var B = parseInt(colorHexCode.substr(5, 2), 16);
			// console.log(R, G, B);

			// http://softpixel.com/~cwright/programming/colorspace/yuv/
			// convert RGB Colorspace to YUV Colorspace
			var Y = R *  0.299000 + G *  0.587000 + B *  0.114000;  // determines the brightness of the color
			var U = R * -0.168736 + G * -0.331264 + B *  0.500000 + 128;  // determines the chrominance of the color
			var V = R *  0.500000 + G * -0.418688 + B * -0.081312 + 128;  // determines the chroma of the color
			// console.log(Y, U, V);

			return Y < 127;
		}
	};
}]);
