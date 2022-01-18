


let index = parseInt(sessionStorage.getItem("index"))
const contentProductTitle = document.getElementById("contentProductTitle")
const wineName = JSON.parse(sessionStorage.getItem(`product${index - 1}`)).name
contentProductTitle.innerHTML = wineName

const contentProductPrice = document.getElementById("contentProductPrice")
contentProductPrice.innerHTML = `$${JSON.parse(sessionStorage.getItem(`product${index - 1}`)).price}<sub>/750ML</sub>`

/*-----------------------------------*/


window.location.hash = `${wineName.replaceAll(" ", "_").toLowerCase()}`

/*-----------------------------------*/

document.title = `Wine House | ${wineName}`



document.querySelector(".content-product-image img").src = `../img/wines/wine${index}.png`

let winetext = document.querySelector(".content-product-description-text")
language_flag_en.addEventListener("click", function () {
    localStorage.setItem("language","am");
    wineInfoLanguage();
})


language_flag_am.addEventListener("click", function () {
    localStorage.setItem("language","en");
    wineInfoLanguage();
})

wineInfoLanguage();


function wineInfoLanguage() {

    if (localStorage.getItem("language") == "en") {
        switch (index) {
            case 1: winetext.innerHTML = `

            <div>
                <p><strong>Vintage</strong>: 2016</p>
                <p><strong>Origin</strong>: Vayots Dzor region</p>
                <p><strong>Grape</strong>: Areni</p>
                <p><strong>Harvest date</strong>: End September, early October</p>
                <p><strong>Climate</strong>: Continental climate. Vineyards are situated at the altitude of 1200 meters
                    above sea level.</p>
                <p><strong>Yield</strong>: 55 hl/ha</p>
                <p><strong>Winemaking</strong>: Grapes are hand-harvested and transferred to the estate in small boxes
                    in refrigerator trucks. Free-run juice is left to rest in contact with skin for about 10 hours
                    before pressing. Two weeks of alcoholic fermentation at the temperature between 14°C to 16°C in
                    stainless steel tanks.</p>
                <p><strong>Tasting notes</strong>: This wine is opulent, aromatic and very well-rounded. The nose
                    reveals bright berry notes, it is fresh and persistent on the palate.</p>
                <p><strong>Food pairing</strong>: Ideal for seafood, chicken dishes, risotto.</p>
                <p><strong>Serving temperature</strong>: 12°C</p>
            </div>`
                break;

            case 2: winetext.innerHTML = `
            <div>
                <p><strong>Origin</strong>: VayotsDzor, Aragatsotn</p>
                <p><strong>Grape</strong>: a blend of Areni 95% and Hakhtanak 5%</p>
                <p><strong>Harvest date</strong>: End - September, beginning October.</p>
                <p><strong>Climate</strong>: Continental climate. Vineyards are situated at an altitude of 1.000 - 1.500
                    meters above sea level.</p>
                <p><strong>Winemaking</strong>: Hand harvested. Grapes are destemmed and crushed. Strict sorting on a
                    selection table at the grapes reception. Two weeks alcoholic fermentation and maceration with
                    temperature between 26˚C to 28˚C in stainless steel tank. Natural malolactic fermentation in
                    stainless steel tank.</p>
                <p><strong>Tasting notes</strong>: This wine opens with intense aromas of red berries and plum, the
                    mouth is round and well-balanced. Delicate and structured wine.</p>
                <p><strong>Food pairing</strong>: Ideal for meats, chicken and cheese.</p>
                <p><strong>Serving temperature</strong>: 18°C</p>
                <p><strong>Consulting winemaker</strong>: Jean-Baptiste Soula</p>
                 

            </div>`
                break;

            case 3: winetext.innerHTML = `
            <div>
                <p><strong>Vintage</strong>: 2018</p>
                <p><strong>Origin</strong>: Vayots Dzor and Armavir regions</p>
                <p><strong>Grape</strong>: Areni 50% (Vayots Dzor), Cabernet Sauvignon 25% and Merlot 25% (Armavir)</p>
                <p><strong>Harvest date</strong>: End September, early October</p>
                <p><strong>Climate</strong>: Continental climate. Vineyards are situated at the altitude of 1200 meters
                    above sea level.</p>
                <p><strong>Yield</strong>: 45 hl/ha</p>
                <p><strong>Winemaking</strong>: The grapes are hand-harvested at the peak of their maturity and
                    transferred to the estate in small boxes in refrigerator trucks. Last strict sorting on the
                    selection table during grape reception. Two weeks of alcoholic fermentation and maceration with
                    temperature between 26 to 28°C in stainless steel tanks.</p>
                <p><strong>Tasting notes</strong>: This deep red colour wine has complex nose with fruity aroma
                    (blackberries, wild cherries, grapes) with a touch of spicy, peppery notes. The palate is structured
                    yet elegant, velvety yet persistent. Cabernet Sauvignon gives the wine black current notes, Merlot-
                    smooth tannins, Areni- elegance.</p>
                <p><strong>Food pairing</strong>: Filet of beef, pork tenderloin, gorgonzola.</p>
                <p><strong>Serving temperature</strong>: 18°C</p>
                <p><strong>Consulting winemaker</strong>: Jean-Baptiste Soula</p>
                 

            </div>`
                break;

            case 4: winetext.innerHTML = `
            <div>
                <p><strong>Origin</strong>: Armavir region</p>
                <p><strong>Grape</strong>: Kangoun 65% and Rkatsiteli 35%</p>
                <p><strong>Harvest date</strong>: End August, early September</p>
                <p><strong>Climate</strong>: Continental climate. Vineyards are situated at altitudes of 900 - 1000
                    meters above sea level.</p>
                <p><strong>Yield</strong>: 65 hl/ha</p>
                <p><strong>Winemaking</strong>: Manual harvest. Gentle membrane pressing with inert gas. Secondary
                    fermentation is done with Charmat method.</p>
                <p><strong>Tasting notes</strong>: Bright, with silky stream of pearly bubbles, carrying crisp and fresh
                    fruitiness all the way through to an elegant finish.</p>
                <p><strong>Food pairing</strong>: Chicken with creole, trout with almonds, salmon steak</p>
                <p><strong>Serving temperature</strong>: 5°C to 8°C</p>
                <p><strong>Consulting winemaker</strong>: Jean-Baptiste Soula</p>
                 
            </div>`
                break;

            case 5: winetext.innerHTML = `
            <div>
            <p>At Duckhorn Vineyards, we have been making wine using grapes from the finest Napa Valley vineyards for
                over 40 years. Building on this rich history, our Napa Valley Chardonnay comes from the coolest regions.
                In the cellar, we applied classic techniques of French oak barrel fermentation with lees stirring,
                resulting in a Chardonnay that balances the complexity and richness of Napa Valley.</p>

            <b>Production Notes</b>
            <p>Blend Composition: 53% Cabernet Sauvignon, 12% Petite Sirah, 12% Zinfandel, 11% Petit Verdot, 7% Syrah,
                5% Malbec</p>
            <b>Winemaker Notes</b>
            <p>Deep, dark and luxurious, this wine offers alluring aromas of blackberry, black cherry, blueberry,
                currant and cocoa powder, with underlying hints of saddle leather, cinnamon and clove. The voluptuous
                dark berry notes are echoed on the palate where they are framed by supple tannins and sophisticated
                layers of anise, vanilla, sweet tobacco leaf and fresh-cracked black pepper, all of which carry the wine
                to a juicy dark berry finish.</p>
            <b>Production</b>
            <p>In Napa Valley, a mild spring and summer, with no significant heat events, pushed the beginning of
                harvest back a full four weeks from our average start date. In addition to providing abundant hangtime,
                the temperate weather ensured that the fruit was able to preserve excellent natural acidity. Because the
                cool weather continued into autumn, we were able to assess and pick each block at ideal ripeness. One of
                the most noteworthy elements of the growing season was the fact that the grapes were able to develop
                beautiful, fully ripe flavors, at lower Brix. As a result, the wines are both elegant and complex, with
                excellent energy and acidity, and lovely varietal character.</p>
             `
                break;

            case 6: winetext.innerHTML = `
            <div>
            <p>At Duckhorn Vineyards, we have been making wine using grapes from the finest Napa Valley vineyards for
                over 40 years. Building on this rich history, our Napa Valley Chardonnay comes from the coolest regions.
                In the cellar, we applied classic techniques of French oak barrel fermentation with lees stirring,
                resulting in a Chardonnay that balances the complexity and richness of Napa Valley.</p>

            <b>Production Notes</b>
            <p>Blend Composition: 53% Cabernet Sauvignon, 12% Petite Sirah, 12% Zinfandel, 11% Petit Verdot, 7% Syrah,
                5% Malbec</p>
            <b>Winemaker Notes</b>
            <p>Deep, dark and luxurious, this wine offers alluring aromas of blackberry, black cherry, blueberry,
                currant and cocoa powder, with underlying hints of saddle leather, cinnamon and clove. The voluptuous
                dark berry notes are echoed on the palate where they are framed by supple tannins and sophisticated
                layers of anise, vanilla, sweet tobacco leaf and fresh-cracked black pepper, all of which carry the wine
                to a juicy dark berry finish.</p>
            <b>Production</b>
            <p>In Napa Valley, a mild spring and summer, with no significant heat events, pushed the beginning of
                harvest back a full four weeks from our average start date. In addition to providing abundant hangtime,
                the temperate weather ensured that the fruit was able to preserve excellent natural acidity. Because the
                cool weather continued into autumn, we were able to assess and pick each block at ideal ripeness. One of
                the most noteworthy elements of the growing season was the fact that the grapes were able to develop
                beautiful, fully ripe flavors, at lower Brix. As a result, the wines are both elegant and complex, with
                excellent energy and acidity, and lovely varietal character.</p>
             

        </div>`
                break;

            case 7: winetext.innerHTML = `
            <div>
            <p>At Duckhorn Vineyards, we have been making wine using grapes from the finest Napa Valley vineyards for
                over 40 years. Building on this rich history, our Napa Valley Chardonnay comes from the coolest regions.
                In the cellar, we applied classic techniques of French oak barrel fermentation with lees stirring,
                resulting in a Chardonnay that balances the complexity and richness of Napa Valley.</p>

            <b>Production Notes</b>
            <p>Blend Composition: 53% Cabernet Sauvignon, 12% Petite Sirah, 12% Zinfandel, 11% Petit Verdot, 7% Syrah,
                5% Malbec</p>
            <b>Winemaker Notes</b>
            <p>Deep, dark and luxurious, this wine offers alluring aromas of blackberry, black cherry, blueberry,
                currant and cocoa powder, with underlying hints of saddle leather, cinnamon and clove. The voluptuous
                dark berry notes are echoed on the palate where they are framed by supple tannins and sophisticated
                layers of anise, vanilla, sweet tobacco leaf and fresh-cracked black pepper, all of which carry the wine
                to a juicy dark berry finish.</p>
            <b>Production</b>
            <p>In Napa Valley, a mild spring and summer, with no significant heat events, pushed the beginning of
                harvest back a full four weeks from our average start date. In addition to providing abundant hangtime,
                the temperate weather ensured that the fruit was able to preserve excellent natural acidity. Because the
                cool weather continued into autumn, we were able to assess and pick each block at ideal ripeness. One of
                the most noteworthy elements of the growing season was the fact that the grapes were able to develop
                beautiful, fully ripe flavors, at lower Brix. As a result, the wines are both elegant and complex, with
                excellent energy and acidity, and lovely varietal character.</p>
             
            </div>`
                break;

            case 8: winetext.innerHTML = `

            <div>
            <p>At Duckhorn Vineyards, we have been making wine using grapes from the finest Napa Valley vineyards for
                over 40 years. Building on this rich history, our Napa Valley Chardonnay comes from the coolest regions.
                In the cellar, we applied classic techniques of French oak barrel fermentation with lees stirring,
                resulting in a Chardonnay that balances the complexity and richness of Napa Valley.</p>
            <b>Production Notes</b>
            <p>Blend Composition: 53% Cabernet Sauvignon, 12% Petite Sirah, 12% Zinfandel, 11% Petit Verdot, 7% Syrah,
                5% Malbec</p>
            <b>Winemaker Notes</b>
            <p>Deep, dark and luxurious, this wine offers alluring aromas of blackberry, black cherry, blueberry,
                currant and cocoa powder, with underlying hints of saddle leather, cinnamon and clove. The voluptuous
                dark berry notes are echoed on the palate where they are framed by supple tannins and sophisticated
                layers of anise, vanilla, sweet tobacco leaf and fresh-cracked black pepper, all of which carry the wine
                to a juicy dark berry finish.</p>
            <b>Production</b>
            <p>In Napa Valley, a mild spring and summer, with no significant heat events, pushed the beginning of
                harvest back a full four weeks from our average start date. In addition to providing abundant hangtime,
                the temperate weather ensured that the fruit was able to preserve excellent natural acidity. Because the
                cool weather continued into autumn, we were able to assess and pick each block at ideal ripeness. One of
                the most noteworthy elements of the growing season was the fact that the grapes were able to develop
                beautiful, fully ripe flavors, at lower Brix. As a result, the wines are both elegant and complex, with
                excellent energy and acidity, and lovely varietal character.</p>
                 
            </div>`
                break;

            case 9: winetext.innerHTML = `
            <div>
            <p>At Duckhorn Vineyards, we have been making wine using grapes from the finest Napa Valley vineyards for
                over 40 years. Building on this rich history, our Napa Valley Chardonnay comes from the coolest regions.
                In the cellar, we applied classic techniques of French oak barrel fermentation with lees stirring,
                resulting in a Chardonnay that balances the complexity and richness of Napa Valley.</p>

            <b>Production Notes</b>
            <p>Blend Composition: 53% Cabernet Sauvignon, 12% Petite Sirah, 12% Zinfandel, 11% Petit Verdot, 7% Syrah,
                5% Malbec</p>
            <b>Winemaker Notes</b>
            <p>Deep, dark and luxurious, this wine offers alluring aromas of blackberry, black cherry, blueberry,
                currant and cocoa powder, with underlying hints of saddle leather, cinnamon and clove. The voluptuous
                dark berry notes are echoed on the palate where they are framed by supple tannins and sophisticated
                layers of anise, vanilla, sweet tobacco leaf and fresh-cracked black pepper, all of which carry the wine
                to a juicy dark berry finish.</p>
            <b>Production</b>
            <p>In Napa Valley, a mild spring and summer, with no significant heat events, pushed the beginning of
                harvest back a full four weeks from our average start date. In addition to providing abundant hangtime,
                the temperate weather ensured that the fruit was able to preserve excellent natural acidity. Because the
                cool weather continued into autumn, we were able to assess and pick each block at ideal ripeness. One of
                the most noteworthy elements of the growing season was the fact that the grapes were able to develop
                beautiful, fully ripe flavors, at lower Brix. As a result, the wines are both elegant and complex, with
                excellent energy and acidity, and lovely varietal character.</p>
             

        </div>`
                break;

            case 10: winetext.innerHTML = `
        <div>
            <p>
                At Duckhorn Vineyards, we have been making wine using grapes from the
                finest Napa Valley vineyards for over 40 years. Building on this rich
                history, our Napa Valley Chardonnay comes from the coolest regions. In
                the cellar, we applied classic techniques of French oak barrel
                fermentation with lees stirring, resulting in a Chardonnay that
                balances the complexity and richness of Napa Valley.
            </p>

            <b>Production Notes</b>
            <p>
                Blend Composition: 53% Cabernet Sauvignon, 12% Petite Sirah, 12%
                Zinfandel, 11% Petit Verdot, 7% Syrah, 5% Malbec
            </p>
            <b>Winemaker Notes</b>
            <p>
                Deep, dark and luxurious, this wine offers alluring aromas of
                blackberry, black cherry, blueberry, currant and cocoa powder, with
                underlying hints of saddle leather, cinnamon and clove. The voluptuous
                dark berry notes are echoed on the palate where they are framed by
                supple tannins and sophisticated layers of anise, vanilla, sweet
                tobacco leaf and fresh-cracked black pepper, all of which carry the
                wine to a juicy dark berry finish.
            </p>
            <b>Production</b>
            <p>
                In Napa Valley, a mild spring and summer, with no significant heat
                events, pushed the beginning of harvest back a full four weeks from
                our average start date. In addition to providing abundant hangtime,
                the temperate weather ensured that the fruit was able to preserve
                excellent natural acidity. Because the cool weather continued into
                autumn, we were able to assess and pick each block at ideal ripeness.
                One of the most noteworthy elements of the growing season was the fact
                that the grapes were able to develop beautiful, fully ripe flavors, at
                lower Brix. As a result, the wines are both elegant and complex, with
                excellent energy and acidity, and lovely varietal character.
            </p>
             
            </div>`
                break;

            case 11: winetext.innerHTML = `
                <div>
                <p>
                    At Duckhorn Vineyards, we have been making wine using grapes from the
                    finest Napa Valley vineyards for over 40 years. Building on this rich
                    history, our Napa Valley Chardonnay comes from the coolest regions. In
                    the cellar, we applied classic techniques of French oak barrel
                    fermentation with lees stirring, resulting in a Chardonnay that
                    balances the complexity and richness of Napa Valley.
                </p>

                <b>Production Notes</b>
                <p>
                    Blend Composition: 53% Cabernet Sauvignon, 12% Petite Sirah, 12%
                    Zinfandel, 11% Petit Verdot, 7% Syrah, 5% Malbec
                </p>
                <b>Winemaker Notes</b>
                <p>
                    Deep, dark and luxurious, this wine offers alluring aromas of
                    blackberry, black cherry, blueberry, currant and cocoa powder, with
                    underlying hints of saddle leather, cinnamon and clove. The voluptuous
                    dark berry notes are echoed on the palate where they are framed by
                    supple tannins and sophisticated layers of anise, vanilla, sweet
                    tobacco leaf and fresh-cracked black pepper, all of which carry the
                    wine to a juicy dark berry finish.
                </p>
                <b>Production</b>
                <p>
                    In Napa Valley, a mild spring and summer, with no significant heat
                    events, pushed the beginning of harvest back a full four weeks from
                    our average start date. In addition to providing abundant hangtime,
                    the temperate weather ensured that the fruit was able to preserve
                    excellent natural acidity. Because the cool weather continued into
                    autumn, we were able to assess and pick each block at ideal ripeness.
                    One of the most noteworthy elements of the growing season was the fact
                    that the grapes were able to develop beautiful, fully ripe flavors, at
                    lower Brix. As a result, the wines are both elegant and complex, with
                    excellent energy and acidity, and lovely varietal character.
                </p>
                 
                </div>`
                break;

            case 12: winetext.innerHTML = `
            <div>
            <p>
                At Duckhorn Vineyards, we have been making wine using grapes from the
                finest Napa Valley vineyards for over 40 years. Building on this rich
                history, our Napa Valley Chardonnay comes from the coolest regions. In
                the cellar, we applied classic techniques of French oak barrel
                fermentation with lees stirring, resulting in a Chardonnay that
                balances the complexity and richness of Napa Valley.
            </p>

            <b>Production Notes</b>
            <p>
                Blend Composition: 53% Cabernet Sauvignon, 12% Petite Sirah, 12%
                Zinfandel, 11% Petit Verdot, 7% Syrah, 5% Malbec
            </p>
            <b>Winemaker Notes</b>
            <p>
                Deep, dark and luxurious, this wine offers alluring aromas of
                blackberry, black cherry, blueberry, currant and cocoa powder, with
                underlying hints of saddle leather, cinnamon and clove. The voluptuous
                dark berry notes are echoed on the palate where they are framed by
                supple tannins and sophisticated layers of anise, vanilla, sweet
                tobacco leaf and fresh-cracked black pepper, all of which carry the
                wine to a juicy dark berry finish.
            </p>
            <b>Production</b>
            <p>
                In Napa Valley, a mild spring and summer, with no significant heat
                events, pushed the beginning of harvest back a full four weeks from
                our average start date. In addition to providing abundant hangtime,
                the temperate weather ensured that the fruit was able to preserve
                excellent natural acidity. Because the cool weather continued into
                autumn, we were able to assess and pick each block at ideal ripeness.
                One of the most noteworthy elements of the growing season was the fact
                that the grapes were able to develop beautiful, fully ripe flavors, at
                lower Brix. As a result, the wines are both elegant and complex, with
                excellent energy and acidity, and lovely varietal character.
            </p>
             
            </div>`
                break;

            default:
                break;
        }
    }

    else switch (index) {
        case 1: winetext.innerHTML = `

        Հայերեն տեքստ 1`
            break;

        case 2: winetext.innerHTML = `

        Հայերեն տեքստ 2`
            break;

        case 3: winetext.innerHTML = `

        Հայերեն տեքստ 3`
            break;

        case 4: winetext.innerHTML = `

        Հայերեն տեքստ 4`
            break;

        case 5: winetext.innerHTML = `

            Հայերեն տեքստ 5`
            break;

        case 6: winetext.innerHTML = `
    
            Հայերեն տեքստ 6`
            break;

        case 7: winetext.innerHTML = `
    
            Հայերեն տեքստ 7`
            break;

        case 8: winetext.innerHTML = `
    
            Հայերեն տեքստ 8`
            break;

        case 9: winetext.innerHTML = `

            Հայերեն տեքստ 9`
            break;

        case 10: winetext.innerHTML = `
    
            Հայերեն տեքստ 10`
            break;

        case 11: winetext.innerHTML = `
    
            Հայերեն տեքստ 11`
            break;

        case 12: winetext.innerHTML = `
    
            Հայերեն տեքստ 12`
            break;


        default:
            break;
    }
}