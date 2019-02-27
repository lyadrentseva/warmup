module.exports = function warmup(temperature) {
    var cTemp = parseFloat(temperature);
	var cToFahr = cTemp * 9 / 5 + 32;
    return cToFahr;
 
};
