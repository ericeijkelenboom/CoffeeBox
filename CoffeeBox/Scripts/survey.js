(function() {

  $(document).ready(function() {
    var surveyHub, surveyViewModel,
      _this = this;
    surveyViewModel = {
      Question: ko.observable(),
      Entries: ko.observableArray(),
      updateEntry: function(entry) {
        return surveyHub.updateEntry(entry.Name);
      }
    };
    ko.applyBindings(surveyViewModel, $('#survey')[0]);
    surveyHub = $.connection.survey;
    surveyHub.updateSurvey = function(survey) {
      return surveyViewModel.Entries(survey.SurveyEntries);
    };
    return $.connection.hub.start(function() {
      return surveyHub.getSurvey();
    });
  });

}).call(this);
