using System.Web.Mvc;

namespace CoffeeBox.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to the CoffeeBox!";

            return View();
        }

        public ActionResult Survey()
        {
            return View();
        }
    }
}