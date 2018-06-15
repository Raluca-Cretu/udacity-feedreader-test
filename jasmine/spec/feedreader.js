/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

// Testing suite of RSS Feeds
$(function() {
    describe('RSS Feeds', function() {

        // Make sure all feeds are defined, not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Make sure all feeds have URL and not empthy
        it("have URLs", function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        // Make sure all feeds have names and are not empty
        it("have URLs", function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
});

// Testing suite of The menu
$(function() {

    describe('The menu', function() {

        // Pre-define elements needed for testing hiding/showing of the menu
        var body = document.body;
        const menuIcon = document.querySelector(".menu-icon-link");

        // Make sure the menu is hidden initially
        it("menu hidden by default", function() {
            expect(body.className).toContain("menu-hidden");
        });


        // Make sure menu icon toggles hide/show on clicking
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


// Testing suite of New Feed Selection
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

    // Make sure when new feed is loaded using loadFeed function, the content changes
    it("changes its loaded content", function(done) {
      var newFeedSelection = document.querySelector(".feed").innerHTML;
      expect(initFeedSelection).not.toBe(newFeedSelection);
      done();
    });
})

}());