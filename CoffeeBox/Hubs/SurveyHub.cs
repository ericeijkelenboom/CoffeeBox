using CoffeeBox.Models;
using SignalR.Hubs;
using System.Linq;

namespace CoffeeBox.Hubs
{
    [HubName("survey")]
    public class SurveyHub : Hub
    {
        #region Dummy survey

        private static readonly Survey Survey = new Survey();

        static SurveyHub()
        {
            Survey.Question = "What is the best programming language ever?";

            Survey.SurveyEntries.Add(new SurveyEntry { Name = "Java", Votes = 0 });
            Survey.SurveyEntries.Add(new SurveyEntry { Name = "C#", Votes = 0 });
            Survey.SurveyEntries.Add(new SurveyEntry { Name = "Ruby", Votes = 0 });
            Survey.SurveyEntries.Add(new SurveyEntry { Name = "Cobol", Votes = 0 });
            Survey.SurveyEntries.Add(new SurveyEntry { Name = "CoffeeScript", Votes = 0 });
        }

        #endregion

        public void GetSurvey()
        {
            Clients.updateSurvey(Survey);
        }

        public void UpdateEntry(string surveyEntryName)
        {
            var entry = Survey.SurveyEntries.FirstOrDefault(e => e.Name == surveyEntryName);

            if (entry != null)
            {
                // Temp synchronization since we're accessing static variable
                lock (Survey)
                {

                    entry.Votes++;
                }
            }

            Clients.updateSurvey(Survey);
        }
    }
}