(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    console.log(planetsString);
    var planetsArray = planetsString.split("|");

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    //var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    //console.log(planetsString);
    //var planetsArray = planetsString.split('|');

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
//var planetsString = "Mercury" <br> "Venus" <br> "Earth" <br> "Mars" <br> "Jupiter" <br> "Saturn" <br> "Uranus" <br> "Neptune"
        //console.log(planetsString);
   // planetsString.split('<br>');

    var brPlanetsString = planetsString.split("|").join("<br>");
    console.log(brPlanetsString);

   // or
    //var string;
    //console.log(planetsString.split("|").join("<br>"));
    //console.log(planetsString.replaceAll("|", "<br>"));

    //Bonus
    /*planetsArray.push("</ul>");
    planetsArray.unshift("<ul>");
    var planetsList = planetsArray.join("<li>");
    planetsList = planetsList.join(" ");//What? This doesn't work
    console.log(planetsList);
*/
})();