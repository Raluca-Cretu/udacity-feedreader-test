/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it("have URLs", function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it("have URLs", function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
});


/* TODO: Write a new test suite named "The menu" */
$(function() {
    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        var body = document.body;
        const menuIcon = document.querySelector(".menu-icon-link");

        it("menu hidden by default", function() {
            expect(body.className).toContain("menu-hidden");
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it("menu display when clicked and hide when clicked again", function() {
            menuIcon.clicked();
            expect(body.className).not.toContain("menu-hidden");
            menuIcon.clicked();
            expect(body.className).toContain("menu-hidden");
        });
});


/* A new test suite named "Initial Entries" */
$(function () {
    describe('Initial Entries', function() {
        // Before loading feed
        beforeEach( function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        // Load "loadFeed" function is called and completes it, and there
        // should at least 1 .entry element in the .feed contianer
        it("has at least 1 entry after loadFeed function is called", function(done) {
          var numEntries = document.querySelector(".feed").getElementsByClassName("entry").length;
          expect(numEntries).toBeGreaterThan(0);
          done();
        });
    });
});

/* TODO: Write a new test suite named "New Feed Selection" */
$(function () {
    describe('New Feed Selection', function () {

// Avoid duplicated setup
// Initial loaded feed setup
    var initFeedSelection;

    beforeEach(function(done) {
      loadFeed(0, function() {
        initFeedSelection = document.querySelector(".feed").innerHTML;

        loadFeed(1, function() {
          done();
        });
      });
    });

    // Make sure when new feed is loaded using loadFeed function,
    // the content changes
    it("changes its loaded content", function(done) {
      var newFeedSelection = document.querySelector(".feed").innerHTML;
      expect(initFeedSelection).not.toBe(newFeedSelection);
      done();
    });

})
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());