---
title: Share
permalink: "/share"
description: Share the most recent call to action
layout: default
image: /assets/rapid-share.png
---

<h2>County Clerk Email Campaign</h2>
    <p>Thousands of New Jerseyans have demanded an end to the genocide of the
Palestinian people. Biden is on track to lose the election to Trump unless he
chooses to listen to the working class of this country and change course. Defeat
is certain if he fails to do so. Uncommitted NJ has witnessed an unfair ballot 
drawing process and we need your help to send a message to county clerks all 
throughout the state. we are using a script to do this. All you have to do is 
click your counties name and an email will be generated.</p>

  <div class='section'>
    <h2>County List</h2>
    <p> CLICK YOUR COUNTY NAME</p>
    <ul>
      <li>

          <p><button>Share MDN!</button></p>
<p class="result"></p> 
        const shareData = {
  title: "MDN",
  text: "Learn web development on MDN!",
  url: "https://developer.mozilla.org",
};

const btn = document.querySelector("button");
const resultPara = document.querySelector(".result");

// Share must be triggered by "user activation"
btn.addEventListener("click", async () => {
  try {
    await navigator.share(shareData);
    resultPara.textContent = "MDN shared successfully";
  } catch (err) {
    resultPara.textContent = `Error: ${err}`;
  }
});
      </li>
    </ul>
  </div>
    
