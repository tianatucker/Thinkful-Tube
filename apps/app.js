$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
  console.log(getRequest);
});

function getRequest(searchTerm){
  var params = {
    part: 'snippet',
    key: 'AIzaSyDGykT8bbY3M1peihLLyo_hmZw10UKukns',
    q: searchTerm
  };
  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data){
    console.log(data.items);
    showResults(data.items);
  });
}

/*function getRequest(searchTerm){
  $.getJSON('https://www.googleapis.com/youtube/v3/search/&part=' + 'snippet' + '&key=AIzaSyDGykT8bbY3M1peihLLyo_hmZw10UKukns?s=' + searchTerm, function(data){
    showResults(data.Search);
  });
}*/

function showResults(results){
  var html = "";
  //console(html);
  $.each(results, function(index,value){
    html += '<h3>' + value.snippet.title + '</h3>' + '<img src="' + value.snippet.thumbnails.medium.url + '" >' + '<br/>';
    console.log(value.snippet.title);
  });
  //console(value.snippet.title);
  $('#search-results').html(html);
}