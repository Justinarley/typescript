class  Data {
    name: string;
    lastName: string;
    mail: string;
    address: string;
    date: string;
    phone: number;
    sport: string;

    constructor(name: string, lastName: string, mail: string, address: string, date: string, phone: number, sport: string) {
        this.name = name;
        this.lastName = lastName;
        this.mail = mail;
        this.address = address;
        this.date = date;
        this.phone = phone;
        this.sport = sport;
    }

    respond() {
        console.log(`Name: ${this.name}, LastName: ${this.lastName}, Email: ${this.mail}, Address: ${this.address}, Date: ${this.date}, phone: ${this.phone} , Sport: ${this.sport}`);
    }
}

let data = new Data('Justin', 'Altamirano', 'jam.altamirano@yavirac.edu.ec', 'Ruminahui', '10/19/23', 961482200, 'Futbol');

data.respond();
