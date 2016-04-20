// #1
var car = {
    make: "Mazda",
    model: "3",
    color: "silver",
    miles: 0,
    drive: function(dist) {
        this.miles += dist;
    },
    inspect: function() {
        console.log("This car is a", this.color, this.make, this.model, "with", this.miles, "miles on it.\n");
    }
};


// #2
var macBookAir = {
    screenSize: '13"',
    powerOn: false,
    RAM: 4,
    storage: 128,
    togglePower: function() {
        this.powerOn = !this.powerOn;
    },
    inspect: function() {
        console.log("This is a MacBook Air with a", this.screenSize, "screen and", this.RAM, "GB of RAM and", this.storage, "GB of storage.");
        this.powerOn ? console.log("It is currently powered on.\n") : console.log("It is currently powered off.\n");
    }
};


// #3
var whiteBoard = {
    height: 12,
    width: 4,
    content: '',
    write: function(line) {
        this.content += line;
    },
    erase: function() {
        this.content = '';
    },
    inspect: function() {
        console.log("This is a", this.height + "\" X", this.width + "\" white board.");
        this.content === '' ? console.log("There is nothing written on it.") : console.log("It says:\n\"" + this.content + "\"\n");
    }
};


// #4
var glass = {
    contents: 'nothing',
    fullness: 0,
    fill: function(liquid) {
        this.contents = liquid;
        this.fullness = 100;
    },
    drink: function() {
        console.log("You take a drink of", this.contents + ".");
        this.fullness -= 10;
    },
    empty: function() {
        this.fullness = 0;
        this.contents = 'nothing';
    },
    inspect: function() {
        console.log("This is a glass that is", this.fullness + "% full of", this.contents + ".\n");
    }
};


// #5
var backpack = {
    color: "black",
    brand: "SwissGear",
    contents: [],
    add: function(stuff) {
        this.contents.push(stuff);
    },
    remove: function(stuff) {
        if (this.contents.indexOf(stuff) === -1) {
            console.log("That's not in the backpack!");
        } else {
            this.contents.splice(this.contents.indexOf(stuff), 1);
        }
    },
    inspect: function() {
        console.log("This is a", this.color, this.brand, "backpack.");
        switch (this.contents.length) {
            case 0:
                console.log("It is empty.\n");
                break;
            case 1:
                console.log("It contains", this.contents[0] + ".\n");
                break;
            case 2:
                console.log("It contains", this.contents[0], "and", this.contents[1] + ".\n");
                break;
            default:
                var stuffInBackpack = "";
                for (var i = 0; i < this.contents.length - 1; i++) {
                    stuffInBackpack += this.contents[i] + ", ";
                }
                stuffInBackpack += "and " + this.contents[this.contents.length - 1] + ".";
                console.log("It contains", stuffInBackpack, "\n");
        }
    }
};

// #6
var phone = {
    brand: "Samsung",
    model: "Galaxy S4",
    color: "black",
    broken: false,
    dial: function(num) {
        if (this.broken) {
            console.log("You can't dial, your phone is broken!");
            return;
        }
        if (num.length === 10) {
            var dot = () => {
                console.log(".");
            };
            var hi = () => {
                console.log("Hello?");
            };
            console.log("Dialing", num + ":");
            setTimeout(dot, 500);
            setTimeout(dot, 1000);
            setTimeout(dot, 1500);
            setTimeout(dot, 2000);
            setTimeout(dot, 2500);
            setTimeout(hi, 3000);
        } else {
            console.log("Invalid number.");
        }
    },
    break: function() {
        if (!this.broken) {
            console.log("You broke your phone!");
            this.broken = true;
        } else {
            console.log("Your phone is already broken.");
        }
    },
    inspect: function() {
        console.log("This is a", this.color, this.brand, this.model, "phone.");
        this.broken ? console.log("It is broken.\n") : console.log("");
    }
};

// #7
var chair = {
    color: "black",
    height: 10,
    raise: function() {
        this.height >= 10 ? console.log("The chair can't go any higher!") : this.height++;
    },
    lower: function() {
        this.height <= 0 ? console.log("The chair can't go any lower!") : this.height--;
    },
    inspect: function() {
        console.log("This is a", this.color, "chair.  It is currently at a height of", this.height, "out of 10.\n");
    }
};

// #8
var sandwich = {
    type: "tuna",
    eaten: false,
    eat: function() {
        if (!this.eaten) {
            console.log("You eat the", this.type, "sandwich.  It is super delicious.");
            this.eaten = true;
        } else {
            console.log("You already ate that, you little piggy!");
        }
    },
    inspect: function() {
        if (!this.eaten) {
            console.log("This is a super delicious-looking", this.type, "sandwich.\n");
        } else {
            console.log("What sandwich?  You ate it already!");
        }
    }
};

// #9
var table = {
    material: "wood",
    height: 10,
    inscription: "",
    raise: function() {
        this.height >= 15 ? console.log("The table can't go any higher!") : this.height++;
    },
    lower: function() {
        this.height <= 0 ? console.log("The table can't go any lower!") : this.height--;
    },
    carve: function(phrase) {
        this.inscription += phrase;
    },
    inspect: function() {
        console.log("This is a table made out of", this.material + ".  It is currently at a height of", this.height, "out of 15.");
        if (this.inscription === "") console.log("");
        else {
            console.log("Someone has carved \"" + this.inscription + "\" into it.\n");
        }
    }
};

// #10
var me = {
    firstName: "Joshua",
    middleName: "Thomas",
    lastName: "Newsom",
    gender: "M",
    hair: "brown",
    eyes: "hazel",
    height: "5' 10\"",
    weight: "Not telling.",
    favoriteMovie: "Adaptation",
    inspect: function() {
        var pronoun;
        var posPronoun;
        this.gender === "M" ? (pronoun = "He", posPronoun = "His") : (pronoun = "She", posPronoun = "Her");
        console.log("This is", this.firstName, this.lastName + ".");
        console.log(pronoun, "has", this.hair, "hair and", this.eyes, "eyes and stands about", this.height, "tall.");
        console.log(posPronoun, "favorite movie is", this.favoriteMovie + ".");
    }
};

// #11
var toilet = {
    color: "white",
    lidUp: true,
    seatUp: true,
    flipSeat: function() {
        if (this.lidUp) {
            this.seatUp = !this.seatUp;
        } else {
            console.log("You can't flip the seat, the lid is down!");
        }
    },
    flipLid: function() {
        if (this.seatUp && this.lidUp) {
            console.log("Put the seat down first!");
        } else {
            this.lidUp = !this.lidUp;
        }
    },
    inspect: function() {
        console.log("This is a", this.color, "toilet.");
        this.seatUp ? console.log("The seat is up.") : console.log("The seat is down.");
        this.lidUp ? console.log("The lid is up.\n") : console.log("The lid is down.\n");
    }
};

// #12
var bed = {
    made: false,
    make: function() {
        if (!this.made) this.made = true;
        else console.log("You already made the bed!");
    },
    sleep: function() {
        if (this.made) {
            console.log("Goodnight!");
            this.made = false;
        } else {
            console.log("You should make your bed first.");
        }
    },
    inspect: function() {
        console.log("This is your bed.");
        console.log("It is", this.made ? "nicely made.\n" : "a total mess.\n");
    }
};

// #13
var book = {
    title: "Geek Sublime",
    subtitle: "The Beauty of Code, the Code of Beauty",
    author: "Vikram Chandra",
    read: function() {
        console.log("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
    },
    inspect: function() {
        console.log("This is the book", this.title + ":", this.subtitle, "by", this.author + ".");
    }
};

// #14
var marker = {
    color: "black",
    capOn: true,
    toggleCap: function() {
        this.capOn = !this.capOn;
    },
    inspect: function() {
        console.log("This is a", this.color, "marker.");
        console.log("The cap is", this.capOn ? "on.\n" : "off.\n");
    }
}

// #15
var lightSwitch = {
    on: false,
    flip: function() {
        this.on = !this.on;
    },
    inspect: function() {
        console.log("This is a light switch.  It is currently", this.on ? "on.\n" : "off.\n");
    }
};

// #16
var piano = {
    color: "black",
    brand: "Steinway",
    kind: "grand",
    numKeys: 88,
    play: function(song) {
        console.log("You sit down and play a beautiful rendition of", song ? song + ".\n" : "Beethonen's Moonlight Sonata.\n");
    }
    inspect: function() {
        console.log("This is a", this.color, this.brand, this.kind, "piano. It has", this.numKeys, "keys.\n");
    }
}

// #17
var dog = {
    name: "Cookie",
    breed: "mutt",
    color: "brindle",
    gender: "F",
    bark: function() {
        console.log("Woof!");
    },
    inspect: function() {
        var pronoun;
        this.gender === "F" ? pronoun = "She" : pronoun = "He";
        console.log("This is", this.name + ". ", pronoun, "is a", this.color, this.breed + ".\n");
    }
};

// #18
var door = {
    isOpen: false,
    open: function() {
        if (this.isOpen) {
            console.log("The door is already open!");
        } else {
            this.isOpen = true;
        }
    },
    close: function() {
        if (!this.isOpen) {
            console.log("The door is already closed!");
        } else {
            this.isOpen = false;
        }
    },
    inspect: function() {
        console.log("This is a door.  It is currently", this.open ? "open.\n" : "closed.\n");
    }
};

// #19
var hat = {
    color: "red",
    worn: false,
    wear: function() {
        if (this.worn) {
            console.log("You're already wearing the hat.");
        } else {
            console.log("You put the hat on.");
            this.worn = true;
        }
    },
    remove: function() {
        if (!this.worn) {
            console.log("You're not wearing the hat.");
        } else {
            console.log("You take the hat off.");
            this.worn = false;
        }
    }
    inspect: function() {
        console.log("This is a", this.color, "hat.\n");
    }
};

// #20
var wallet = {
  money: 20,
  color: "black",
  material: "leater",
  add: function (num) {
    this.money += num;
  },
  remove: function (num) {
    if (this.money - num < 0) {
      console.log("You don't have that much money in your wallet!");
    } else {
      this.money -= num;
    }
  },
  inspect: function () {
    console.log("This is a", this.color, this.material, "wallet containing $" + this.money + ".\n");
  }
};
