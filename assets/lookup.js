$(document).ready(function () {


  //need an input box for the search term

  let searchTerm = "";

  //need a place to capture the number of records to retrieve

  let recordCount = 0;

  //start year

  let startYear;

  //end year

  let endYear;

  let apiKey = "e5rUYLdd4pWA5sZoPOZEy4AUDjVJ9ie8"


  let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="
    + searchTerm + "&api-key=" + apiKey

  //I don't think the syntax above is correct for start year and end year and we also need to pass in the record 
  //it is, here from apis q=obama&facet_fields=source&facet=true&begin_date=20120101&end_date=20121231, 
  //to make it work we need if else statement


  // okay, did i add the wrong link? also im trying to get up to date on what we are working on. I was at work untill about an hour ago. 
  //need a button to execute the search and pass in the parameters for the ajax call
  //sorry Simone, I think the link is right, but we need to be able to pass in additional
  //search parameters for record count, start and end date, we can do that later though



})

$(document).on("click", "#search-button", function (event) {
event.preventDeafault(); //never forget

let getQuery = $("#search_term").val();

        let limit = $("#number_of_records").val();
        let startYear = $("#start_year").val();
        let endYear = $("#end_year").val();

        if (startYear !== "") {
            startYear = "&begin_date=" + startYear + "0101";
        }
        else { startYear = ""; }

        if (endYear !== "") {
            endYear = "&end_date=" + endYear + "1231";
        }
        else { endYear = ""; }



        let getQueryString = getQuery.split(" ").join("+");
        console.log(getQueryString)

        //see if this works

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    console.log(response);

  })
//looks good to me
  //does that look right?
  // yes, i was thinking if up nvm you got it lol 


})