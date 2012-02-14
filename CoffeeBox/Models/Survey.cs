using System.Collections.Generic;

namespace CoffeeBox.Models
{
    public class Survey
    {
        public Survey()
        {
            SurveyEntries = new List<SurveyEntry>();
        }

        public string Question { get; set; }
        public IList<SurveyEntry> SurveyEntries { get; set; }
    }
}