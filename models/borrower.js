var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var BorrowerSchema = new Schema({

	username: String,
	password: String,
	password_confirmation: String,
	
	borrower_info: {
		first_name: String,
		last_name: String,
		phone_number: Number,
		date_of_birth: Date,
		years_in_school: Number,
		present_address: String,
		mailing_address: String,
		length_of_residency: Number,
		former_address: String,
	},
	employment_info: {
		employer_name: String,
		employer_address: String,
		self_employed: Boolean,
		years_on_job: Number,
		years_employed_in_profession: Number,
		position_or_type_of_business: String,
	},
	income_info: {
		base_income: Number,
		overtime_income: Number,
		bonus_income: Number,
		commision_income: Number,
		dividend_interest_income: Number,
		net_rental_income: Number,
		other_income: Number,
	},
	expense_info: {
		rent_expense: Number,
		mortgage_pi: Number,
		other_mortgage_pi: Number,
		hazard_insurance: Number,
		real_estate_taxes: Number,
		mortgage_insurance: Number,
		hoa_dues: Number,
		other: Number,
	},
	asset_info: {
		bank1: String,
		bank2: String,
		bank3: String,
		cash_or_market_value1: Number,
		cash_or_market_value2: Number,
		cash_or_market_value3: Number,
		stocks_or_bonds: Number,
		cash_value_of_life_insurance: Number,
		real_estate_owned: Number,
		vested_retirement_interest: Number,
		net_worth_of_business: Number,
		automobile_make: String,
		automobile_value: Number,
		other_assets: String,
	},
	liability_info: {
		name_of_debtor1: String,
		name_of_debtor2: String,
		name_of_debtor3: String,
		name_of_debtor4: String,
		name_of_debtor5: String,
		monthly_payment1: Number,
		monthly_payment2: Number,
		monthly_payment3: Number,
		monthly_payment4: Number,
		monthly_payment5: Number,
		alimony_child_support: Number,
	},
	new_mortgage_info: {
		credit_score: Number,
		home_price: Number,
		loan_amount: Number,
		term: Number,
		interest_rate: Number,
		monthly_pi: Number,
		monthly_ti: Number,
		monthly_hoa: Number,
		total_monhthly_payment: Number,
	}
});

BorrowerSchema.statics.hashPassword = function(password, cb){
  bcrypt.hash(password, null, null, cb);
};
BorrowerSchema.methods.validatePassword = function(password, cb){
  bcrypt.compare(password, this.password, cb);
};

BorrowerSchema.plugin(passportLocalMongoose);

var Borrower = mongoose.model('Borrower', BorrowerSchema);

module.exports = Borrower;
