var assert = require('assert');
require('coffee-script/register')

var pricingRules = require('../src/checkout.coffee').pricingRules,
    Checkout = require('../src/checkout.coffee').Checkout;

describe('Checkout', function() {
  describe('Discounts and Totals', function() {

    it('Items: VOUCHER, TSHIRT, MUG should total: 32.50€', function() {
    	var co = new Checkout(pricingRules);
			co.scan("VOUCHER").scan("TSHIRT").scan("MUG");
			assert.equal('32.50€', co.total());
    });

    it('Items: VOUCHER, TSHIRT, VOUCHER should total: 25.00€', function() {
    	var co = new Checkout(pricingRules);
			co.scan("VOUCHER").scan("TSHIRT").scan("VOUCHER");
			assert.equal('25.00€', co.total());
    });

    it('Items: TSHIRT, TSHIRT, TSHIRT, VOUCHER, TSHIRT should total: 81.00€', function() {
    	var co = new Checkout(pricingRules);
			co.scan("TSHIRT").scan("TSHIRT").scan("TSHIRT").scan("VOUCHER").scan("TSHIRT");
			assert.equal('81.00€', co.total());
    });

    it('Items: VOUCHER, TSHIRT, VOUCHER, VOUCHER, MUG, TSHIRT, TSHIRT should total: 74.50€', function() {
    	var co = new Checkout(pricingRules);
			co.scan("VOUCHER").scan("TSHIRT").scan("VOUCHER").scan("VOUCHER").scan("MUG").scan("TSHIRT").scan("TSHIRT");
			assert.equal('74.50€', co.total());
    });

  });
});