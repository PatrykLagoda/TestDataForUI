using Brightest.Taf.DemoTests.TourOfHeroPages;
using Brightest.Taf.Web;

namespace Brightest.Taf.DemoTests.TourOfHero.Pages
{
    public class HeroesView : BaseTourOfHeroes
    {
        private readonly string _url;
        private readonly WebPage _webPage;

        public HeroesView()
        {
            _url = "http://localhost:4321/heroes";
            _webPage = new WebPage(Browser);
        }

        internal void EnterHeroName(string name)
        {
            //new-hero
            var heroNameFieldId = ObjectIdentification.Id("new-hero");
            var heroNameField = _webPage.SearchElementOnPage(heroNameFieldId);
            heroNameField.Text = name;
        }

        internal void ClickAddHero()
        {
            //add-button
            var addButtonDesc = ObjectIdentification.XPath("//*[@class='add-button']");
            var addButton = _webPage.SearchElementOnPage(addButtonDesc);
            addButton?.Click();
        }

        internal bool IsHeroInList(string heroName)
        {
            var heroDesc = ObjectIdentification.XPath($"//*/li/a[contains(text(),' {heroName} ')]");
            var hero = _webPage.SearchElementOnPage(heroDesc);

            return hero?.IsVisible() ?? false;
        }

        internal void DeleteHero(string heroName)
        {
            var heroDesc = ObjectIdentification.XPath($"//*/li/a[contains(text(),' {heroName} ')]/../button[@class='delete']");
            var hero = _webPage.SearchElementOnPage(heroDesc);

            hero?.Click();
        }

        internal void OpenPage()
        {
            Browser.Action.GoToUrl(_url);
        }

        internal void ClosePage()
        {
            Browser.CloseBrowser();
        }
    }
}
