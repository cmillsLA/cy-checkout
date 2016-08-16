Checkout = (price) ->
	# Cart items.
	@cart = {}
	# Scan items.
	@scan = (item) ->
		if @cart[item] then @cart[item]++ else @cart[item] = 1
		this

	# Buy two get one free disount.
	@buytwo = (cost, qty) ->
		((cost * qty) - (cost * Math.floor(qty / 2)))

	# Bulk discount, buy three save 1/ea.
	@bulk = (cost, qty) ->
		if qty > 2 then qty * (cost - 1) else qty * cost

	# Return cart item(s) total.
	@total = ->
		_total = 0;
		for i of @cart
			console.log(i);
			_total += if price[i].discount then @[price[i].discount](price[i].cost, @cart[i]) else @cart[i] * price[i].cost
		_total.toFixed(2) + '€'

	return

# Pricing Rules, including discount options.
pricingRules =
	'VOUCHER':
		cost: 5,
		discount: 'buytwo'
	'TSHIRT':
		cost: 20
		discount: 'bulk'
	'MUG':
		cost: 7.5,
		discount: null

# Tests.
module.exports =
	pricingRules : pricingRules,
	Checkout : Checkout
