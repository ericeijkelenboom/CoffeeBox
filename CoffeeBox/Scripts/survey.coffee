$(document).ready -> 
    # Create model
    surveyViewModel = {
        Question: ko.observable()
        Entries: ko.observableArray()

        updateEntry: (entry) => 
            surveyHub.updateEntry entry.Name
    }

    # Bind model to view
    ko.applyBindings surveyViewModel, $('#survey')[0]

    # Create server connection
    surveyHub = $.connection.survey

    surveyHub.updateSurvey = (survey) -> 
        surveyViewModel.Entries(survey.SurveyEntries)

    $.connection.hub.start -> 
        surveyHub.getSurvey()
