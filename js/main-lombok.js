// helper functions
function formatNumber(x) {
  return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function findObjectByKey(array, key, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i][key] === value) {
      return array[i];
    }
  }
  return null;
}

// these will not be used to provide key stats from the `overview` tab
var reservedFields = ["overview-text", "target-beneficiaries", "requested-amount", "funding"]

// get the data from the google spreadhsheet
var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/10fmbWi62IKI_900kHJKsk1DQE6craab6vWPAjfn2le0/';
function init() {
  Tabletop.init( { key: publicSpreadsheetUrl, callback: vizIt } )
}
function vizIt(data, tabletop) {
  
  var pageData = data.overview.elements;
  
  $('#overview-text').text(findObjectByKey(pageData, "key", "overview-text").value)
  $('#target-beneficiaries').text(formatNumber(findObjectByKey(pageData, "key", "target-beneficiaries").value))
  $('#requested-amount').text(formatNumber(findObjectByKey(pageData, "key", "requested-amount").value))
  $('#funding').text(formatNumber(findObjectByKey(pageData, "key", "funding").value))
  
  for(i = 0; i < pageData.length; i++) {
    if($.inArray(pageData[i].key, reservedFields) == -1) {
      var figureHtml = '<div class="col-xs-3">' +
          '<img class="pull-left" src="../img/' + pageData[i].img + '" height="60px">' +
          '<div><span class="secondary-figure_number">' + pageData[i].value + '</span><br>' +
            '<span class="secondary-figure_name">' + pageData[i].key + '</span>' +
          '</div>' +
        '</div>';
      $('#secondary-figures').append(figureHtml);
      
      
    }
    
    
    
  }
  
  
}

  

// kick everything off
init()

// checkin with Marian
// SAMIL for auth for RC
// PII issues

