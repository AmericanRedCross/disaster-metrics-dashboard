## Disaster metrics dashboard

This project allows you to create a dashboard with high-level numbers for a disaster impact and response. The primary use case is when a single IFRC Appeal includes multiple operations. For example, the 2018 Indonesia earthquakes and tsunami appeal that included operations to separate disaster events in both Sulawesi and Lombok. Pages on the IFRC GO platform are created for each appeal, not operation, and only has a single overview numbers section. This project allows you to create an overview section for each operation and then add them to a GO page via an iframe embed in the "Additional Graphics" section.

![screen shot of a dashboard](https://raw.githubusercontent.com/AmericanRedCross/disaster-metrics-dashboard/gh-pages/img/screen-shot-example.png)

### Creating a new dashboard

- Request to be a contributor or fork the repository, clone, and create a new branch for your changes.
- Make a copy one of the dashboard folders (e.g. `.\2018-idn-sulawesi\`) and rename it. It's nice to stick to the naming convention of 4 digit year, dash, alpha 3 iso code for the country, dash, descriptor. All lowercase. For a multi-country disaster, you'll need to pick one country or think of something creative.
- Create a Google Spreadsheet, name a tab `overview` and create a table like the below:

|key|value|label|img|color|
|---|---|---|---|---|
|overview-text|Type an overview description here.||||
|key-target|80,000|Target beneficiaries|||
|key-money1|1,500,000|Requested amount (CHF)|||
|key-money2| 1,200,750|Funding (CHF)|||
|secondary-figure|870|Fatalities|dead.svg||
|secondary-figure|30,000|Displaced|displaced.svg||
|secondary-figure|673|Volunteers mobilized|person.svg|primary-darkred-0|
|secondary-figure|10,330|People benefited from health services|health.svg|primary-darkred-0|
|sources||Type a list of sources here.||||

- However, you can add or delete as many `secondary-figure` rows as you want.
- For each `secondary-figure` row, edit the `value` and `label`, and add a filename from the `./img/secondary-icons/` [folder](https://github.com/AmericanRedCross/disaster-metrics-dashboard/tree/gh-pages/img/secondary-icons) in the `img` column. Optionally, you can adjust the color of the icon by adding a value from the "secondary-figure color options" section below in the `color` column.
- For your list of sources you can include links using an html [anchor tag](https://www.w3schools.com/tags/tag_a.asp). The `target="_blank"` in the below example requests the browser to open the link in a new tab. Adding a `<br>` will insert a line break.

```
Impact figures provided from <a href="https://sites.google.com/view/gempadonggala/beranda" target="_blank">BNPB portal</a>, 20-Nov 
<br>Other data: PMI, 02-Jan 2019 
```
  
- This project uses [PapaParse](https://www.papaparse.com/) to load the Google spreadsheet data. Publish the Google Sheet worksheet to web as a csv and share your file so that anyone with the link may read/view the data.
- In the `index.html` file, edit what should be about line 70 so that is has the URL for your data.

```
<script>
var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1EJhoA9DaqVD2MqREGCTNnUeHnLcEqqmeLbSx9T4MscQ/pub?output=csv';
</script>
```
  
- While you're editing the `index.html` file, change what should be about line 27 so that it has the title for your new dashboard.

```
<div class="row text-center">
  <h3 class="gored">My Dashboard Title</h3>
</div>
```
  
- To test your dashboard locally I suggest using node.js and the [`http-server`](https://www.npmjs.com/package/http-server) package, or using the built-in [web server in Python](https://www.pythonforbeginners.com/modules-in-python/how-to-use-simplehttpserver/) using `python -m SimpleHTTPServer`.
- When you're ready, push your branch and edits up to GitHub. Then open a pull request into the `gh-pages` branch of the repository.
- The code to embed within a Snippet on an IFRC GO page should look something like the below. You'll need to adjust the height value according to how many rows of secondary icons you end up having. You want the iframe tall enough so that a scroll bar doesn't appear at most screen sizes. You can include more than one iframe embed in a single Snippet object, just add a line break between each with a `<br>`.

```
<iframe width="100%" height="500px" frameborder="0" src="https://americanredcross.github.io/disaster-metrics-dashboard/2018-idn-lombok/"></iframe>
<br>
```
 

### `secondary-figure` color options

- ![#C9C3C1](https://placehold.it/20/C9C3C1/000000?text=+`) (this is the default color)
- ![#E32219](https://placehold.it/20/E32219/000000?text=+) &nbsp; `ifrc`
- ![#F63440](https://placehold.it/20/F63440/000000?text=+) &nbsp; `primary-red-0`
- ![#7A1600](https://placehold.it/20/7A1600/000000?text=+) &nbsp; `primary-darkred-0`
- ![#C3ADA9](https://placehold.it/20/C3ADA9/000000?text=+) &nbsp; `primary-darkred-1`
- ![#E1D6D4](https://placehold.it/20/E1D6D4/000000?text=+) &nbsp; `primary-darkred-2`
- ![#786A65](https://placehold.it/20/786A65/000000?text=+) &nbsp; `primary-grey-0`
- ![#C9C3C1](https://placehold.it/20/C9C3C1/000000?text=+) &nbsp; `primary-grey-1`
- ![#E4E1E0](https://placehold.it/20/E4E1E0/000000?text=+) &nbsp; `primary-grey-2`
- ![#FFD200](https://placehold.it/20/FFD200/000000?text=+) &nbsp; `secondary-yellow-0`
- ![#FFE466](https://placehold.it/20/FFE466/000000?text=+) &nbsp; `secondary-yellow-1`
- ![#FFF6CC](https://placehold.it/20/FFF6CC/000000?text=+) &nbsp; `secondary-yellow-2`
- ![#FF5014](https://placehold.it/20/FF5014/000000?text=+) &nbsp; `secondary-orange-0`
- ![#FF9966](https://placehold.it/20/FF9966/000000?text=+) &nbsp; `secondary-orange-1`
- ![#FFDCD0](https://placehold.it/20/FFDCD0/000000?text=+) &nbsp;`secondary-orange-2`
- ![#00A0DC](https://placehold.it/20/00A0DC/000000?text=+) &nbsp;`secondary-blue-0`
- ![#99D9F1](https://placehold.it/20/99D9F1/000000?text=+) &nbsp;`secondary-blue-1`
- ![#CCECF8](https://placehold.it/20/CCECF8/000000?text=+) &nbsp;`secondary-blue-2`
- ![#D20073](https://placehold.it/20/D20073/000000?text=+) &nbsp;`secondary-magenta-0`
- ![#ED99C7](https://placehold.it/20/ED99C7/000000?text=+) &nbsp;`secondary-magenta-1`
- ![#F6CCE3](https://placehold.it/20/F6CCE3/000000?text=+) &nbsp;`secondary-magenta-2`
- ![#8CD200](https://placehold.it/20/8CD200/000000?text=+) &nbsp;`secondary-green-0`
- ![#BAE466](https://placehold.it/20/BAE466/000000?text=+) &nbsp;`secondary-green-1`
- ![#E8F6CC](https://placehold.it/20/E8F6CC/000000?text=+) &nbsp;`secondary-green-2`
- ![#003246](https://placehold.it/20/003246/000000?text=+) &nbsp;`secondary-darkblue-0`
- ![#99ADB5](https://placehold.it/20/99ADB5/000000?text=+) &nbsp;`secondary-darkblue-1`
- ![#CCD6DA](https://placehold.it/20/CCD6DA/000000?text=+) &nbsp;`secondary-darkblue-2`
- ![#5A325F](https://placehold.it/20/5A325F/000000?text=+) &nbsp;`secondary-purple-0`
- ![#BDADBF](https://placehold.it/20/BDADBF/000000?text=+) &nbsp;`secondary-purple-1`
- ![#DED6DF](https://placehold.it/20/DED6DF/000000?text=+) &nbsp;`secondary-purple-2`
- ![#555F1E](https://placehold.it/20/555F1E/000000?text=+) &nbsp;`secondary-darkgreen-0`
- ![#999F78](https://placehold.it/20/999F78/000000?text=+) &nbsp;`secondary-darkgreen-1`
- ![#DDDFD2](https://placehold.it/20/DDDFD2/000000?text=+) &nbsp;`secondary-darkgreen-2`

### Adding new secondary icons

- If using Adobe Illustrator to save a new SVG icon for the secondary-icon set, under Advanced Options, for CSS Properties, set the option to "Style Attributes" (not "style Elements").
- The color of new icons should be #C9C3C1 with 100% opacity.
- So that it's possible to change the color of an icon, the icon can't have any objects with transparent/white/etc fill.
