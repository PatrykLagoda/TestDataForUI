using Brightest.Taf.DemoTests.TourOfHero.Pages;
using FluentAssertions;
using NUnit.Framework;

namespace Brightest.Taf.DemoTests.Tests
{
    [TestFixture]
    public class TourOfHeroTests
    {
        [Test]
        public void CanAddAHero()
        {
            // Arrange
            var heroesView = new HeroesView();
            var heroName = "Laurens";

            // Act
            heroesView.OpenPage();
            heroesView.EnterHeroName(heroName);
            heroesView.ClickAddHero();
            var isHeroPresent = heroesView.IsHeroInList(heroName);
            heroesView.ClosePage();

            // Assert
            isHeroPresent.Should().BeTrue();
        }

        [Test]
        public void CanDeleteAHero()
        {
            // Arrange
            var heroesView = new HeroesView();
            var heroName = "Laurens";

            // Act
            heroesView.OpenPage();
            heroesView.EnterHeroName(heroName);
            heroesView.ClickAddHero();
            var isHeroPresent = heroesView.IsHeroInList(heroName);
            heroesView.DeleteHero(heroName);
            var isHeroPresentDeleted = heroesView.IsHeroInList(heroName);
            heroesView.ClosePage();

            // Assert
            isHeroPresent.Should().BeTrue();
            isHeroPresentDeleted.Should().BeTrue();
        }
    }
}
