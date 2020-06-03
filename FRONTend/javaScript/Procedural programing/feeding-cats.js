function feedingCats() {
    var cats = ["Tabby", "Lizzie", "Mary"];
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Firday", "Saturday", "Sunday"];
    for (var day = 0; day < days.length; day++) {
        var currentDay = days[day];
        for (var index = 0; index < cats.length; index++) {
            if (cats[index] === "Tabby") {
                console.log(cats[0] + " is eating chicken on " + currentDay);
            } else if (cats[index] === "Lizzie") {
                console.log(cats[1] + " is eating chicken on " + currentDay);
            } else if (cats[index] === 'Mary') {
                console.log(cats[2] + " is eating whatever on " + currentDay);
            }
        }
    }
}
feedingCats();