// The same script runs on every page. Set up each form only if it exists.
var analysisForm = document.getElementById("analysisForm");
var reviewForm = document.getElementById("reviewForm");

if (analysisForm) {
  analysisForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var company = document.getElementById("companyName").value.trim();
    var growth = Number(document.getElementById("revenueGrowth").value);
    var discount = Number(document.getElementById("discountRate").value);
    var terminal = Number(document.getElementById("terminalGrowth").value);

    if (company === "") {
      document.getElementById("analysisResults").textContent = "Please enter a company name.";
      return;
    }
    displayAnalysis(company, evaluateAssumptions(growth, discount, terminal));
  });

  analysisForm.addEventListener("reset", function () {
    document.getElementById("analysisResults").textContent = "Submit your inputs to see feedback for each assumption.";
  });
}

// These fixed thresholds are illustrative classroom rules, not market benchmarks.
// Return a status and one note for each input; there is no quality score.
function evaluateAssumptions(growth, discount, terminal) {
  var notes = [];
  var needsReview = false;
  var status = "No starter flags";

  if (growth > 20 || growth < 0) {
    needsReview = true;
    notes.push("Revenue growth: " + growth + "%. Explain the drivers of this rapid growth or decline using company evidence.");
  } else {
    notes.push("Revenue growth: " + growth + "%. No starter flag; support your forecast with company evidence.");
  }

  if (discount < 7 || discount > 16) {
    needsReview = true;
    notes.push("WACC: " + discount + "%. Outside the illustrative 7–16% teaching range. Explain how you calculated the rate and why it fits the company.");
  } else {
    notes.push("WACC: " + discount + "%. Inside the teaching range; still explain the components of your discount rate.");
  }

  if (terminal >= discount) {
    needsReview = true;
    notes.push("Terminal growth: " + terminal + "%. For the constant-growth terminal-value formula used here, growth must be below WACC. Revise these inputs before proceeding.");
  } else if (terminal > 3.5 || terminal < 0) {
    needsReview = true;
    notes.push("Terminal growth: " + terminal + "%. Outside the illustrative 0–3.5% teaching range. Explain the long-term economic and business assumptions.");
  } else {
    notes.push("Terminal growth: " + terminal + "%. No starter flag; explain why this long-term rate fits your company and valuation context.");
  }

  if (needsReview) status = "Review needed";
  // This condition takes priority over every other result.
  if (terminal >= discount) status = "Revise terminal growth before proceeding";
  return { status: status, notes: notes };
}

function displayAnalysis(company, result) {
  var output = document.getElementById("analysisResults");
  output.textContent = "";
  var heading = document.createElement("h3");
  heading.textContent = company + ": " + result.status;
  var list = document.createElement("ul");
  for (var i = 0; i < result.notes.length; i++) {
    var item = document.createElement("li");
    item.textContent = result.notes[i];
    list.appendChild(item);
  }
  var nextStep = document.createElement("p");
  nextStep.textContent = "Next step: document your evidence, revise the inputs as needed, and run the check again. Passing these checks does not validate the full valuation.";
  output.append(heading, list, nextStep);
}

if (reviewForm) {
  reviewForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("reviewerName").value.trim();
    var rating = document.getElementById("reviewRating").value;
    var feedback = document.getElementById("reviewText").value.trim();
    var message = document.getElementById("reviewMessage");
    if (name === "" || feedback === "") {
      message.textContent = "Please enter a name and feedback containing more than spaces.";
      return;
    }
    addReview(name, rating, feedback);
    reviewForm.reset();
    message.textContent = "Thank you. Your feedback has been added to the student feedback list for this visit.";
  });
}

// Use textContent so a user's feedback is displayed as text, never as HTML.
function addReview(name, rating, feedback) {
  var card = document.createElement("article");
  card.className = "panel review";
  var heading = document.createElement("h3");
  heading.textContent = name;
  var ratingText = document.createElement("p");
  ratingText.className = "rating";
  ratingText.textContent = "Rating: " + rating + " out of 5";
  var comment = document.createElement("p");
  comment.textContent = feedback;
  card.append(heading, ratingText, comment);
  document.getElementById("reviewList").prepend(card);
}
