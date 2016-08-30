var db = require('./models');

var borrower = [{
	borrower_auth: {
		username: "nursetta",
		password: "1234",
		password_confirmation: "1234",
	},
	borrower_info: {
	    first_name: "Nick",
		last_name: "Ursetta",
		phone_number: 3039072289,
		date_of_birth: "1989-08-23",
		years_in_school: 16,
		present_address: "2568 Danbury Lane, Highlands Ranch, CO 80126",
		mailing_address: "2568 Danbury Lane, Highlands Ranch, CO 80126",
		length_of_residency: 2,
		former_address: "2568 Danbury Lane, Highlands Ranch, CO 80126",
	},
	employment_info : {
		employer_name: "FirstBank",
		employer_address: "12345 W. Colfax Ave, Lakewood, CO 80125",
		self_employed: false,
		years_on_job: 3.5,
		years_employed_in_profession: 4.5,
		position_or_type_of_business: "Banking",
	},
	income_info: {
		base_income: 7500,
		overtime_income: 0,
		bonus_income: 0,
		commision_income: 0,
		dividend_interest_income: 0,
		net_rental_income: 0,
		other_income: 0,
	},
	expense_info: {
		rent_expense: 750,
		mortgage_pi: 0,
		other_mortgage_pi: 0,
		hazard_insurance: 0,
		real_estate_taxes: 0,
		mortgage_insurance: 0,
		hoa_dues: 0,
		other: 0,
	},
	asset_info: {
		bank1: "FirstBank",
		bank2: "N/A",
		bank3: "N/A",
		cash_or_market_value1: 15000,
		cash_or_market_value2: 0,
		cash_or_market_value3: 0,
		stocks_or_bonds: 0,
		cash_value_of_life_insurance: 0,
		real_estate_owned: 0,
		vested_retirement_interest: 0,
		net_worth_of_business: 0,
		automobile_make: "Toyota 4Runner",
		automobile_value: 35000,
		other_assets: "none",
	},
	liability_info: {
		name_of_debtor1: "Toyota Financial",
		name_of_debtor2: "Wells Fargo",
		name_of_debtor3: "FirstBank",
		name_of_debtor4: "n/a",
		name_of_debtor5: "n/a",
		monthly_payment1: 14000,
		monthly_payment2: 200,
		monthly_payment3: 0,
		monthly_payment4: 0,
		monthly_payment5: 0,
		alimony_child_support: 0,
	}
}];

db.Borrower.remove({}, function(err, borrowers){
	if (err) { return console.log ('err', err); 
	} else {
		console.log('removed all items');

	// db.Borrower.create(borrower, function (err, borrowers){
	// 	if (err) { return console.log ('error:', err);
	// }
	// 	console.log("created", borrower.length, "borrower");
	// 	process.exit();
	// 	});
	}
});