var Data = /** @class */ (function () {
    function Data(name, lastName, mail, address, date, phone, sport) {
        this.name = name;
        this.lastName = lastName;
        this.mail = mail;
        this.address = address;
        this.date = date;
        this.phone = phone;
        this.sport = sport;
    }
    Data.prototype.respond = function () {
        console.log("Name: ".concat(this.name, ", LastName: ").concat(this.lastName, ", Email: ").concat(this.mail, ", Address: ").concat(this.address, ", Date: ").concat(this.date, ", phone: ").concat(this.phone, " , Sport: ").concat(this.sport));
    };
    return Data;
}());
var data = new Data('Justin', 'Altamirano', 'jam.altamirano@yavirac.edu.ec', 'Ruminahui', '10/19/23', 961482200, 'Futbol');
data.respond();
