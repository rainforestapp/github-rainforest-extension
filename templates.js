// Generated by CoffeeScript 1.9.0
(function() {
  this.holderTmpl = function() {
    return "<div class='rainforest-info-holder'> <ul class='rainforest-complete-runs'></ul> <ul class='rainforest-in-progress-runs'></ul> <label>Env:</label> <select class='rainforest-envs'></select> <label>Tag:</label> <select class='rainforest-tags'> <option value='all'>All tests</option> </select> <button class='btn run-rainforest'>Run Rainforest Suite</button> </div>";
  };

  this.completeRunsTmpl = function() {
    return "<p class= 'rainforest-complete-title'>recent Rainforest tests:</p>";
  };

  this.inProgressRunsTmpl = function() {
    return "<p class='rainforest-in-progress-title'>in progress Rainforest tests:</p>";
  };

  this.runHistoryItemTmpl = function(run) {
    var i, length, tag, tagText, _i, _len, _ref;
    length = run.requested_tests.length;
    tagText = "";
    if (run.filters.tags != null) {
      _ref = run.filters.tags;
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        tag = _ref[i];
        tagText = tagText + " #" + tag;
        if (i > 0) {
          tagText = tagText + ", ";
        }
      }
    }
    return "<li> <code> <a href='" + run.frontend_url + "'>" + run.id + "</a>: " + length + " " + tagText + " test" + (length > 1 ? "s" : "") + " against " + run.environment.name + ". Run " + run.state + ", " + run.result + ". </code> </li>";
  };

}).call(this);
