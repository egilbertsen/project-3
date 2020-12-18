'use strict';
var seedWineries = [
  {
    "Name": "00 WINES",
    "Address": "801 N Scott St,  Carlton, OR 97113",
    "Phone": "303-875-5297",
    "Email": "chris@00wines.com",
    "Website": "00wines.com",
    "Notes": "Mar-Nov 11-5 daily, Dec-Feb 11-4 daily at the Carlton"
  },
  {
    "Name": "ABBEY ROAD FARM",
    "Address": "10200 NE Oak Springs Farm Road,  Carlton, OR 97111",
    "Phone": "503-687-3101",
    "Email": "info@abbeyroadfarm.com",
    "Website": "www.abbeyroadfarm.com",
    "Notes": "Wednesday-Sunday 11am-5pm"
  },
  {
    "Name": "ABBOTT CLAIM",
    "Address": "11011 NE Bayliss Road,  Carlton, OR 97111",
    "Phone": "503-687-3839",
    "Email": "taste@abbottclaim.com",
    "Website": "www.abbottclaim.com",
    "Notes": "By Appt"
  },
  {
    "Name": "ADEA WINE COMPANY",
    "Address": "26421 NW Highway 47,  Gaston, OR 97119",
    "Phone": "503-662-4509",
    "Email": "",
    "Website": "www.adeawine.com",
    "Notes": "By Appt - Drop ins welcome"
  },
  {
    "Name": "ADELSHEIM VINEYARD",
    "Address": "16800 NE Calkins Lane,  Newberg, OR 97132",
    "Phone": "503-538-3652",
    "Email": "info@adelsheim.com",
    "Website": "adelsheim.com",
    "Notes": "Open Thursday - Monday: 10am-4pm"
  },
  {
    "Name": "ALEXANA ESTATE VINEYARD & WINERY",
    "Address": "12001 NE Worden Hill Road Newberg, OR 97132",
    "Phone": "503-537-3100",
    "Email": "",
    "Website": "alexanawinery.com",
    "Notes": "Open Daily, By Appointment Only"
  },
  {
    "Name": "ALLORO VINEYARD",
    "Address": "22075 SW Lebeau Road Sherwood, OR 97140",
    "Phone": "503-625-1978",
    "Email": "info@allorovineyard.com",
    "Website": "allorovineyard.com",
    "Notes": "Tastings Thursday-Sunday by appointment only. Open for curbside pick up 11-5 daily"
  },
  {
    "Name": "ANAM CARA CELLARS",
    "Address": "306 N Main Street Newberg, OR 97132",
    "Phone": "503-537-9150",
    "Email": "info@anamcaracellars.com",
    "Website": "anamcaracellars.com",
    "Notes": "Hours: 11am-5pm Friday-Sunday"
  },
  {
    "Name": "ANDANTE VINEYARD",
    "Address": "3855 Morris Rd Dallas, OR 97338",
    "Phone": "503-734-8121",
    "Email": "",
    "Website": "www.andantevineyard.com",
    "Notes": "11-5 Thursday-Sunday by appointment"
  },
  {
    "Name": "ANDERSON FAMILY VINEYARD",
    "Address": "20120 NE Herring Lane Newberg, OR, 97132",
    "Phone": "503-554-5541",
    "Email": "",
    "Website": "andersonfamilyvineyard.com",
    "Notes": "Hours: appointments cheerfully encouraged"
  },
  {
    "Name": "ANDREW RICH WINES",
    "Address": "801 N Scott Street Carlton, OR 97111",
    "Phone": "503-284-6622",
    "Email": "",
    "Website": "andrewrichwines.com",
    "Notes": "Mar-Nov 11-5 daily, Dec-Feb 11-4 daily"
  },
  {
    "Name": "ANGELA VINEYARDS",
    "Address": "525 SE Pine St. Portland, OR 97214",
    "Phone": "503-554-1049",
    "Email": "hello@angelavineyards.com",
    "Website": "angelavineyards.com",
    "Notes": "Saturday & Sunday by appointment; see website for details"
  },
  {
    "Name": "ANNE AMIE VINEYARDS",
    "Address": "6580 NE Mineral Springs Road Carlton, OR 97111",
    "Phone": "503-864-2991",
    "Email": "contactus@anneamie.com",
    "Website": "anneamie.com",
    "Notes": "Hours: 10am-5pm daily by reservation only; curbside pick up available at the winery."
  },
  {
    "Name": "ANTICA TERRA",
    "Address": "979 SW Alder Street Dundee, OR 97115",
    "Phone": "503-244-1748",
    "Email": "info@anticaterra.com",
    "Website": "anticaterra.com",
    "Notes": "Thursday-Sunday by appointment"
  },
  {
    "Name": "ANTIQUUM FARM,",
    "Address": "25075 Jaeg Road Junction City, OR 97448",
    "Phone": "541-556-4842",
    "Email": "stephen@antiquumfarm.com",
    "Website": "www.antiquumfarm.com",
    "Notes": "Tasting by Appointment"
  },
  {
    "Name": "APOLLONI VINEYARDS",
    "Address": "14135 NW Timmerman Road Forest Grove, OR 97116",
    "Phone": "503-359-3606",
    "Email": "info@apolloni.com",
    "Website": "apolloni.com",
    "Notes": "Tasting Room open 11 AM - 5 PM, Friday - Monday (reservations recommended), Curbside pick up available as well"
  },
  {
    "Name": "ARAMENTA CELLARS",
    "Address": "17979 NE Lewis Rogers Lane Newberg, OR 97132",
    "Phone": "503-538-7230",
    "Email": "",
    "Website": "aramentacellars.com",
    "Notes": "Hours: 10-4 daily"
  },
  {
    "Name": "ARBORBROOK VINEYARDS",
    "Address": "17770 NE Calkins Lane Newberg, OR 97132",
    "Phone": "503-538-0959",
    "Email": "",
    "Website": "arborbrookwines.com",
    "Notes": "Saturday & Sunday 11am-5pm by reservation only, see website for details"
  },
  {
    "Name": "ARCHERY SUMMIT",
    "Address": "18599 NE Archery Summit Road Dayton, OR 97114",
    "Phone": "503-714-2030",
    "Email": "info@archerysummit.com",
    "Website": "archerysummit.com",
    "Notes": "Tasting Room open 10am-5pm Friday through Monday"
  },
  {
    "Name": "ARGYLE WINERY",
    "Address": "691 Highway 99W Dundee, OR 97115",
    "Phone": "503-538-8520",
    "Email": "Tastinghouse@argylewinery.com",
    "Website": "argylewinery.com",
    "Notes": "By appointment. Call or reserve online."
  },
  {
    "Name": "ARLYN VINEYARD",
    "Address": "17325 NE Calkins Lane Newberg, OR 97132",
    "Phone": "503-537-8168",
    "Email": "",
    "Website": "www.arlyn.farm",
    "Notes": "by appointment only"
  },
  {
    "Name": "ARTISANAL WINE CELLARS",
    "Address": "614 E First St Newberg, OR 97132",
    "Phone": "503-537-2094",
    "Email": "pfeller@awcwine.com",
    "Website": "www.artisanalwinecellars.com",
    "Notes": "11am-6pm"
  },
  {
    "Name": "AUDEANT WINES",
    "Address": "9675 Hopewell Rd Salem, OR 97304",
    "Phone": "541-968-3113",
    "Email": "info@audeantwines.com",
    "Website": "www.audeant.com",
    "Notes": "By appointment only"
  },
  {
    "Name": "AUGUST CELLARS",
    "Address": "14000 NE Quarry Road Newberg, OR 97132",
    "Phone": "503-554-6766",
    "Email": "sales@augustcellars.com",
    "Website": "www.augustcellars.com",
    "Notes": "Hours: Thursday-Monday 11-5, reservations recommended"
  },
  {
    "Name": "AURORA COLONY VINEYARDS",
    "Address": "21338 Oak Lane NE Aurora, OR 97002",
    "Phone": "503-678-3390",
    "Email": "",
    "Website": "www.auroracolonyvineyards.com",
    "Notes": "May-Sept:Tues-Sat 12-8pm, Sun 12-6. Oct-Apr: Thurs-Sun 12-6pm"
  },
  {
    "Name": "AYRES VINEYARD",
    "Address": "17971 NE Lewis Rogers Lane Newberg, OR 97132",
    "Phone": "503-538-7450",
    "Email": "",
    "Website": "ayresvineyard.com",
    "Notes": "Hours: Memorial Day and Thanksgiving weekends 10:30-3:30, or by appointment"
  },
  {
    "Name": "BAILEY FAMILY WINES",
    "Address": "10660 SW Youngberg Hill Road McMinnville, OR 97128",
    "Phone": "971-241-2913",
    "Email": "wayne@baileyfamilywines.com",
    "Website": "www.BaileyFamilyWines.com",
    "Notes": "11 AM to 4 PM"
  },
  {
    "Name": "BEACON HILL WINERY",
    "Address": "22070 NE Ridge Rd. Gaston, OR 97119",
    "Phone": "503-662-5212",
    "Email": "info@beaconhillwinery.com",
    "Website": "www.beaconhillwinery.com",
    "Notes": "Thursday-Sunday 10am-5pm, reservations highly recommended."
  },
  {
    "Name": "BEAUX FRÈRES",
    "Address": "15155 NE North Valley Road Newberg, OR 97132",
    "Phone": "503-537-1137",
    "Email": "tastingroom@beauxfreres.com",
    "Website": "beauxfreres.com",
    "Notes": "Hours: Tours and Tastings By Appointment Only - Please Call or email"
  },
  {
    "Name": "BECKHAM ESTATE VINEYARD",
    "Address": "30790 SW Heater Road Sherwood, OR 97140",
    "Phone": "971-645-3466",
    "Email": "annedria@beckhamestatevineyard.com",
    "Website": "beckhamestatevineyard.com",
    "Notes": "Hours: Friday and Saturday 11-5 and by appt. Open Memorial Day, Labor Day and Thanksgiving weekends."
  },
  {
    "Name": "BELLA VIDA VINEYARD",
    "Address": "9380 NE Worden Hill Road Dundee, OR 97115",
    "Phone": "503-538-9821",
    "Email": "steven@bellavida.com",
    "Website": "www.bellavida.com",
    "Notes": "11am-5pm daily by appointment only"
  },
  {
    "Name": "BELLE PENTE VINEYARD & WINERY",
    "Address": "12470 NE Rowland Road Carlton, OR 97111",
    "Phone": "503-852-9500",
    "Email": "",
    "Website": "bellepente.com",
    "Notes": "Hours: Open Memorial Day and Thanksgiving weekends, or by appointment"
  },
  {
    "Name": "BELLS UP WINERY",
    "Address": "27895 NE Bell Road Newberg, OR 97132",
    "Phone": "503-537-1328",
    "Email": "info@bellsupwinery.com",
    "Website": "www.bellsupwinery.com",
    "Notes": "10am-4pm daily by reservation only"
  },
  {
    "Name": "BENTON-LANE WINERY",
    "Address": "23924 Territorial Highway Monroe, OR 97456",
    "Phone": "541-847-5792",
    "Email": "info@benton-lane.com",
    "Website": "benton-lane.com",
    "Notes": "Hours: September - May 12-5 daily, June - August: Sunday - Thursday 12-5, Friday & Saturday 12 -6"
  },
  {
    "Name": "BENZA VINEYARDS",
    "Address": "16740 SW Pinot Pl Hillsboro, OR 97123",
    "Phone": "415-302-7853",
    "Email": "ron@benza.com",
    "Website": "www.benza.com",
    "Notes": ""
  },
  {
    "Name": "BERGSTRÖM WINES",
    "Address": "8115 NE Worden Road Dundee, OR 97115",
    "Phone": "503-554-0468",
    "Email": "",
    "Website": "bergstromwines.com",
    "Notes": "Thursday-Monday by appointment only"
  },
  {
    "Name": "BETHEL HEIGHTS VINEYARD",
    "Address": "6060 Bethel Heights Road NW Salem, OR 97304",
    "Phone": "503-581-2262",
    "Email": "info@bethelheights.com",
    "Website": "bethelheights.com",
    "Notes": "Closed until further notice"
  },
  {
    "Name": "BIG TABLE FARM",
    "Address": "128 S Pine St Carlton, OR 97111",
    "Phone": "503-852-3097",
    "Email": "",
    "Website": "bigtablefarm.com",
    "Notes": "By appointment only"
  },
  {
    "Name": "BJÖRNSON VINEYARD",
    "Address": "3635 Bethel Heights Road NW Salem, OR 97304",
    "Phone": "503-687-3016",
    "Email": "info@bjornsonwine.com",
    "Website": "www.bjornsonwine.com",
    "Notes": "Daily 11am - 5pm; Appointments Highly Encouraged During COVID-19"
  },
  {
    "Name": "BLAKESLEE VINEYARD ESTATE",
    "Address": "20875 SW Chapman Road Sherwood, OR 97140",
    "Phone": "503-625-6902",
    "Email": "info@blakesleevineyard.com",
    "Website": "blakesleevineyard.com",
    "Notes": "Hours: Thursday-Monday 11am-5pm by reservation"
  },
  {
    "Name": "BOEDECKER CELLARS",
    "Address": "2621 NW 30th Avenue Portland, OR 97210",
    "Phone": "503-224-5778",
    "Email": "info@boedeckercellars.com",
    "Website": "boedeckercellars.com",
    "Notes": "Wednesday -Sunday 2-7"
  },
  {
    "Name": "BRAVURO CELLARS",
    "Address": "108 S College St Newberg, OR 97132",
    "Phone": "503-822-5116",
    "Email": "steve@bravurocellars.com",
    "Website": "www.bravurocellars.com",
    "Notes": "Hours: 12 noon - 6:00pm daily"
  },
  {
    "Name": "BRICK HOUSE VINEYARDS",
    "Address": "18200 Lewis Rogers Lane Newberg, OR 97132",
    "Phone": "503-538-5136",
    "Email": "",
    "Website": "brickhousewines.com",
    "Notes": "Hours: By appointment"
  },
  {
    "Name": "BRITTAN VINEYARDS",
    "Address": "829 NE Fifth Street McMinnville, OR 97128",
    "Phone": "971-241-8228",
    "Email": "",
    "Website": "brittanvineyards.com",
    "Notes": "Thursday-Monday 11am-5pm, Tuesday-Wednesday by appointment"
  },
  {
    "Name": "BROADLEY VINEYARDS",
    "Address": "265 South Fifth Monroe, OR 97456",
    "Phone": "541-847-5934",
    "Email": "info@broadleyvineyards.com",
    "Website": "www.broadleyvineyards.com",
    "Notes": "Thursday-Sunday 1-5pm (weather permitting) thru August 20th; curbside pickup Saturday & Sunday 1-4pm"
  },
  {
    "Name": "BROOKS",
    "Address": "21101 SE Cherry Blossom Lane Amity, OR 97101",
    "Phone": "503-435-1278",
    "Email": "info@brookswine.com",
    "Website": "www.brookswine.com",
    "Notes": "Hours: 11-5 daily by reservation only"
  },
  {
    "Name": "BRYN MAWR VINEYARDS",
    "Address": "5935 Bethel Heights Rd NW Salem, OR 97304",
    "Phone": "503-581-4286",
    "Email": "info@brynmawrvineyards.com",
    "Website": "brynmawrvineyards.com",
    "Notes": "Open by appointment. Call 503-581-4286 to schedule."
  },
  {
    "Name": "CANA’S FEAST WINERY",
    "Address": "750 West Lincoln Street Carlton, OR 97111",
    "Phone": "503-852-0002",
    "Email": "info@canasfeast.com",
    "Website": "canasfeast.com",
    "Notes": "Hours: 11-5 daily"
  },
  {
    "Name": "CARABELLA VINEYARD",
    "Address": "16707 SW Edminston Road Wilsonville, OR 97070",
    "Phone": "503-925-0972",
    "Email": "",
    "Website": "carabellawine.com",
    "Notes": "Hours: Open by appointment only for Seated Tastings and Vineyard Tours, May through Mid-October and open Thanksgiving Weekend"
  },
  {
    "Name": "Carlton CELLARS",
    "Address": "300 East First Street Newberg, OR 97132",
    "Phone": "503-852-7888",
    "Email": "",
    "Website": "Carltoncellars.com",
    "Notes": "Hours: 11-5 Thur-Sun, call for winter Hours"
  },
  {
    "Name": "Carlton WINEMAKERS STUDIO",
    "Address": "801 N Scott Street Carlton, OR 97111",
    "Phone": "503-852-6100",
    "Email": "",
    "Website": "winemakersstudio.com",
    "Notes": "Hours: Seated tastings by appointment at 11am, 1pm & 3pm. Curbside pickup 11am-5pm."
  },
  {
    "Name": "CHEHALEM WINERY",
    "Address": "106 S Center St Newberg, OR 97132",
    "Phone": "503-538-4700",
    "Email": "info@chehalemwines.com",
    "Website": "chehalemwines.com",
    "Notes": "By Appointment Only"
  },
  {
    "Name": "CHERRY HILL WINERY",
    "Address": "7867 Crowley Road Rickreall, OR 97371",
    "Phone": "503-623-7867",
    "Email": "office@cherryhillwinery.com",
    "Website": "www.cherryhillwinery.com",
    "Notes": "Hours: By appointment only"
  },
  {
    "Name": "CHRIS JAMES CELLARS",
    "Address": "12000 NW Old Wagon Rd Carlton, OR 97111",
    "Phone": "503-852-1135",
    "Email": "chris@chrisjamescellars.com",
    "Website": "chrisjamescellars.com",
    "Notes": "Mar-Nov 12-5 Friday-Monday by appointment year round"
  },
  {
    "Name": "COELHO WINERY",
    "Address": "111 Fifth Street Amity, OR 97101",
    "Phone": "503-835-9305",
    "Email": "info@coelhowinery.com",
    "Website": "coelhowinery.com",
    "Notes": "Hours: 11am-5pm daily by appointment"
  },
  {
    "Name": "COEUR DE TERRE VINEYARD",
    "Address": "21000 SW Eagle Point Road McMinnville, OR 97128",
    "Phone": "503-883-4111",
    "Email": "",
    "Website": "cdtvineyard.com",
    "Notes": "Hours: 11-5 Thursday-Sunday by appointment"
  },
  {
    "Name": "COLENE CLEMENS VINEYARDS",
    "Address": "22501 NE Dopp Road Newberg, OR 97132",
    "Phone": "503-662-4687",
    "Email": "info@coleneclemens.com",
    "Website": "coleneclemens.com",
    "Notes": "11-5 daily, reservations required, maximum group size of 6"
  },
  {
    "Name": "COOPER MOUNTAIN VINEYARDS",
    "Address": "20121 SW Leonardo Lane  Beaverton , OR 97007",
    "Phone": "503-649-0027",
    "Email": "info@coopermountainwine.com",
    "Website": "coopermountainwine.com",
    "Notes": "Hours: By reservation Friday-Sunday at 11am, 1pm & 3pm. Groups of 4 or less please."
  },
  {
    "Name": "CORIA ESTATES",
    "Address": "8252 Redstone Ave SE Salem, OR 97306",
    "Phone": "503-363-0525",
    "Email": "info@coriaestates.com",
    "Website": "www.coriaestates.com",
    "Notes": "Open Daily 12-6pm"
  },
  {
    "Name": "CRAFT WINE COMPANY",
    "Address": "213 N Yamhill Street Carlton, OR, 97111",
    "Phone": "503-852-3033",
    "Email": "contact@craftwineco.com",
    "Website": "www.craftwineco.com",
    "Notes": "9am-5pm Monday-Friday, 10am-4pm most weekends. Reservations recommended."
  },
  {
    "Name": "CRAMOISI VINEYARD",
    "Address": "Cramoisi Vineyard8670 NE Worden Hill Rd Dundee, OR, 97115",
    "Phone": "503-583-1536",
    "Email": "sofia@cramoisivineyard.com",
    "Website": "cramoisivineyard.com",
    "Notes": "By appointment only"
  },
  {
    "Name": "CRISTOM VINEYARDS",
    "Address": "6905 Spring Valley Road NW Salem, OR 97304",
    "Phone": "503-375-3068",
    "Email": "",
    "Website": "www.cristomvineyards.com",
    "Notes": "Hours: 11-5 daily"
  },
  {
    "Name": "CROWLEY WINES",
    "Address": "14000 NE Quarry Rd Newberg, OR 97132",
    "Phone": "971-645-3547",
    "Email": "tyson@crowleywines.com",
    "Website": "www.crowleywines.com",
    "Notes": "By appointment only"
  },
  {
    "Name": "CUBANISIMO VINEYARDS",
    "Address": "1754 Best Road NW Salem, OR 97304",
    "Phone": "503-588-1763",
    "Email": "",
    "Website": "cubanisimovineyards.com",
    "Notes": "Hours: 11-5 daily"
  },
  {
    "Name": "DAVID HILL VINEYARDS & WINERY",
    "Address": "46350 NW David Hill Road Forest Grove, OR 97116",
    "Phone": "503-992-8545",
    "Email": "",
    "Website": "davidhillwinery.com",
    "Notes": "Hours: 11-5 daily"
  },
  {
    "Name": "DAVID PAIGE WINES",
    "Address": "19625 SW Kruger Rd Sherwood, OR 97140",
    "Phone": "503-880-0837",
    "Email": "dave@paigewines.com",
    "Website": "www.paigewines.com",
    "Notes": "Not open to the public"
  },
  {
    "Name": "DAY WINES AT DAY CAMP",
    "Address": "21160 OR-99W Dundee, OR 97115",
    "Phone": "971-832-8196",
    "Email": "tastingroom@daywines.com",
    "Website": "www.daywines.com",
    "Notes": "Wednesday - Sunday 11am-5pm"
  },
  {
    "Name": "DE LANCELLOTTI FAMILY VINEYARDS",
    "Address": "18605 NE Calkins Lane Newberg, OR 97132",
    "Phone": "503-537-0866",
    "Email": "paul@delancellottifamilyvineyards.com",
    "Website": "delancellottifamilyvineyards.com",
    "Notes": "Hours: by appointment."
  },
  {
    "Name": "DE PONTE CELLARS",
    "Address": "17545 NE Archery Summit Road Dayton, OR 97114",
    "Phone": "503-864-3698",
    "Email": "info@depontecellars.com",
    "Website": "depontecellars.com",
    "Notes": "Hours: Tastings by appointment at 11am, 12:30, 2:00 & 3:30pm; Limited to groups of 6 or less."
  },
  {
    "Name": "DION VINEYARD",
    "Address": "33155 Riedweg Rd Cornelius, OR 97113",
    "Phone": "503-407-8598",
    "Email": "info@dionvineyard.com",
    "Website": "www.dionvineyard.com",
    "Notes": "March-Nov by reservation Friday-Sunday at 11am, 12:30pm & 2pm. Dec-Feb contact for a private tasting or parking lot pickup."
  },
  {
    "Name": "DIVISION WINEMAKING COMPANY",
    "Address": "2425 SE 35th Pl Portland, OR 97214",
    "Phone": "503-208-2061",
    "Email": "kate@divisionwineco.com",
    "Website": "www.divisionwineco.com",
    "Notes": ""
  },
  {
    "Name": "DOBBES FAMILY ESTATE",
    "Address": "240 SE Fifth Street Dundee, OR 97115",
    "Phone": "503-538-1141x118",
    "Email": "info@dobbesfamilyestate.com",
    "Website": "dobbesfamilyestate.com",
    "Notes": "Hours: By appointment only 11am-6pm daily"
  },
  {
    "Name": "DOMAINE DE BROGLIE",
    "Address": "6475 Hilltop Lane Dayton, OR 97114",
    "Phone": "503-376-1600",
    "Email": "",
    "Website": "domainedebroglie.com",
    "Notes": "Daily 11am-4pm by Reservation"
  },
  {
    "Name": "DOMAINE DIVIO",
    "Address": "16435 NE Lewis Rogers Lane Newberg, OR 97132",
    "Phone": "503-334-0903",
    "Email": "info@domainedivio.com",
    "Website": "www.domainedivio.com",
    "Notes": "By appointment only"
  },
  {
    "Name": "DOMAINE DROUHIN OREGON",
    "Address": "6750 NE Breyman Orchard Road Dayton, OR 97114",
    "Phone": "503-864-2700",
    "Email": "info@domainedrouhin.com",
    "Website": "domainedrouhin.com",
    "Notes": "Hours: Daily 10am-4pm By Reservation Only"
  },
  {
    "Name": "DOMAINE ROY & FILS",
    "Address": "8351 NE Worden Hill Rd Dundee, OR 97115",
    "Phone": "503-687-2600",
    "Email": "hospitality@domaineroy.com",
    "Website": "www.domaineroy.com",
    "Notes": "10am-5pm daily by reservation only"
  },
  {
    "Name": "DOMAINE SERENE",
    "Address": "6555 Hilltop Lane Dayton, OR 97114",
    "Phone": "866-864-6555",
    "Email": "hospitality@domaineserene.com",
    "Website": "www.domaineserene.com",
    "Notes": "Hours: 11am-4pm daily, reservations required"
  },
  {
    "Name": "DOMINIO IV WINES",
    "Address": "11570 NE Intervale Rd Carlton, OR 97111",
    "Phone": "971-261-7781",
    "Email": "stephen@dominiowines.com",
    "Website": "dominiowines.com",
    "Notes": "Open Daily By Appointment 12-5pm"
  },
  {
    "Name": "DUKES FAMILY VINEYARDS",
    "Address": "7845 SE Amity Road Amity, OR 97101",
    "Phone": "503-835-0620",
    "Email": "info@dukesfamilyvineyards.com",
    "Website": "dukesfamilyvineyards.com",
    "Notes": "June-Labor Day, 12-4pm, Friday-Sunday, reservations suggested. Closed July 3-5."
  },
  {
    "Name": "Dundee WINE LIBRARY WINERY AND B&B",
    "Address": "20420 NE Sunnycrest Rd Newberg, OR 97132",
    "Phone": "503-297-8800",
    "Email": "aramintamiller@comcast.net",
    "Website": "Dundeewinelibrary.com",
    "Notes": "By appointment 11am-5pm daily"
  },
  {
    "Name": "DURANT VINEYARDS",
    "Address": "5430 NE Breyman Orchards Road Dayton, OR 97114",
    "Phone": "503-864-2000",
    "Email": "",
    "Website": "durantvineyards.com",
    "Notes": "Hours: Daily 10am-5pm"
  },
  {
    "Name": "DUSKY GOOSE",
    "Address": "8355 NE Warren Rd Dundee, OR 97210",
    "Phone": "503-857-5776",
    "Email": "",
    "Website": "duskygoose.com",
    "Notes": "Hours: by appointment only"
  },
  {
    "Name": "EIEIO & COMPANY",
    "Address": "10100 NW Meadow Lake Road Carlton, OR, 97111",
    "Phone": "503-852-6733",
    "Email": "jay@onhisfarm.com",
    "Website": "www.onhisfarm.com",
    "Notes": "Open for pre-paid tasting by reservation. See website for details."
  },
  {
    "Name": "ÉLEVÉE WINEGROWERS",
    "Address": "9653 NE Keyes Lane Dundee, OR, 97115",
    "Phone": "503-840-8448",
    "Email": "info@eleveewines.com",
    "Website": "www.eleveewines.com",
    "Notes": ""
  },
  {
    "Name": "ELIZABETH CHAMBERS CELLAR",
    "Address": "455 NE Irvine St McMinnville, OR, 97128",
    "Phone": "503-412-9765",
    "Email": "info@elizabethchamberscellar.com",
    "Website": "www.ElizabethChambersCellar.com",
    "Notes": "Tuesday & Wednesday | By Appointment, Thursday - Sunday 11:00am - 4:00pm Reservations suggested but not required"
  },
  {
    "Name": "ELK COVE VINEYARDS",
    "Address": "27751 NW Olson Road Gaston, OR 97119",
    "Phone": "503-985-7760",
    "Email": "info@elkcove.com",
    "Website": "www.elkcove.com",
    "Notes": "Hours: 10-5 daily by reservations"
  },
  {
    "Name": "EMINENT DOMAINE",
    "Address": "20875 NE Ribbon Ridge Rd Newberg, OR 97132",
    "Phone": "503-687-1180",
    "Email": "jeff@eminentdomaine.com",
    "Website": "www.eminentdomaine.com",
    "Notes": ""
  },
  {
    "Name": "EOLA HILLS WINE CELLARS",
    "Address": "1600 Oak Grove Road NW Salem, OR, 97304",
    "Phone": "503-623-2405",
    "Email": "tastingroom@eolahillswinery.com",
    "Website": "www.eolahillswinery.com",
    "Notes": "Friday-Sunday noon-7pm by reservation only."
  },
  {
    "Name": "ERATH",
    "Address": "1439 NW Marshall Street Portland, OR 97209",
    "Phone": "503-538-3318",
    "Email": "info@erath.com",
    "Website": "www.erath.com",
    "Notes": "Hours: 11:00am to 5:00pm - Thursday-Sunday - By Appointment"
  },
  {
    "Name": "ET FILLE WINES",
    "Address": "718 E First Street Newberg, OR 97132",
    "Phone": "503-538-2900",
    "Email": "info@etfillewines.com",
    "Website": "etfillewines.com",
    "Notes": "By appointment Friday-Sunday 12-6pm"
  },
  {
    "Name": "EVENING LAND VINEYARDS",
    "Address": "1326 N Hwy 99W, Suite 100 Dundee, OR 97115",
    "Phone": "503-538-4110",
    "Email": "info@elvwines.com",
    "Website": "www.eveninglandvineyards.com",
    "Notes": "10-5 daily"
  },
  {
    "Name": "EVESHAM WOOD VINEYARD & WINERY",
    "Address": "3795 Wallace Road NW Salem, OR 97304",
    "Phone": "503-371-8478",
    "Email": "",
    "Website": "eveshamwood.com",
    "Notes": "Fri-Sun 11am-5pm (by appointment)"
  },
  {
    "Name": "FAILLA WINES",
    "Address": "5659 Zena Road NW Salem, OR 97304",
    "Phone": "503-391-5555",
    "Email": "janelle@faillawines.com",
    "Website": "www.faillawinesoregon.com",
    "Notes": "Tasting by reservation at 10am, 1pm & 3pm daily"
  },
  {
    "Name": "FAIRSING VINEYARD",
    "Address": "20881 NE Laughlin Road Yamhill, OR, 97148",
    "Phone": "503-560-8266",
    "Email": "info@fairsingvineyard.com",
    "Website": "www.fairsingvineyard.com",
    "Notes": "Wednesday-Sunday by reservation"
  },
  {
    "Name": "FIRESTEED CELLARS",
    "Address": "8380 NE Worden Hill Road Dundee, OR, 97115",
    "Phone": "503-831-7054",
    "Email": "info@firesteed.com",
    "Website": "firesteed.com",
    "Notes": "By appointment"
  },
  {
    "Name": "FIVE FOURTEEN VINEYARDS",
    "Address": "91470 Territorial HwyJunction City, OR, 97448",
    "Phone": "541-520-1172",
    "Email": "info@fivefourteenvineyards.com",
    "Website": "www.fivefourteenvineyards.com",
    "Notes": "Saturday & Sunday Noon-6pm"
  },
  {
    "Name": "FLÂNEUR WINES",
    "Address": "128 S Pine St Carlton, OR, 97111",
    "Phone": "503-899-4120",
    "Email": "visit@flaneurwines.com",
    "Website": "www.flaneurwines.com",
    "Notes": "11am-5pm daily by appointment only"
  },
  {
    "Name": "FOX FARM VINEYARDS",
    "Address": "575 Hwy 99W Dundee, OR 97115",
    "Phone": "503-538-8466",
    "Email": "",
    "Website": "foxfarmvineyards.com",
    "Notes": "11am-7pm Friday-Sunday by reservations only"
  },
  {
    "Name": "FREJA CELLARS",
    "Address": "16691 SW McFee Place Hillsboro, OR 97123",
    "Phone": "503-628-0337",
    "Email": "",
    "Website": "frejacellars.com",
    "Notes": "Hours: by appointment"
  },
  {
    "Name": "FULLERTON WINES",
    "Address": "1966 NW Pettygrove St Portland, OR, 97209",
    "Phone": "503-477-7848",
    "Email": "info@fullertonwines.com",
    "Website": "www.fullertonwines.com",
    "Notes": "Mon-Thurs 2-9pm, Friday-Saturday 12-9:00pm, Sun 12-7:30pm"
  },
  {
    "Name": "FURIOSO VINEYARDS",
    "Address": "8415 NE Worden Hill Rd Dundee, OR, 97115",
    "Phone": "844-FURIOSO",
    "Email": "Hospitality@FuriosoVineyards.com",
    "Website": "www.furiosovineyards.com",
    "Notes": "11am - 5pm, Daily. Reservation STRONGLY recommended."
  },
  {
    "Name": "GOODFELLOW FAMILY CELLARS",
    "Address": "888 NE 8th Avenue McMinnville, OR 97128",
    "Phone": "503-939-1308",
    "Email": "marcus@goodfellowfamilycellars.com",
    "Website": "goodfellowfamilycellars.com",
    "Notes": "Tastings by appointment"
  },
  {
    "Name": "GOTHIC WINES",
    "Address": "20980 Ne Niederberger Road Dundee, OR 97115",
    "Phone": "",
    "Email": "info@gothicwine.com",
    "Website": "www.gothicwine.com",
    "Notes": ""
  },
  {
    "Name": "GRAN MORAINE WINERY",
    "Address": "17090 NE Woodland Loop Rd Yamhill, OR, 97148",
    "Phone": "855-831-6631",
    "Email": "hospitality@granmoraine.com",
    "Website": "granmoraine.com",
    "Notes": "11-5 daily by appointment only"
  },
  {
    "Name": "GROCHAU CELLARS",
    "Address": "9360 SE Eola Hills Rd Amity, OR, 97101",
    "Phone": "503-835-0208",
    "Email": "",
    "Website": "Grochaucellars.com",
    "Notes": "Hours: Friday-Sunday, 12-5pm by appointment"
  },
  {
    "Name": "HAMACHER WINES",
    "Address": "14665 SW Winery Lane Beaverton, OR 97007",
    "Phone": "503-594-4133",
    "Email": "info@hamacherwines.com",
    "Website": "hamacherwines.com",
    "Notes": "Hours: Wednesday-Sunday, 11am-5pm by appointment"
  },
  {
    "Name": "HARPER VOIT WINES",
    "Address": "707 NE Fifth St McMinnville, OR 97128",
    "Phone": "503-583-4221",
    "Email": "",
    "Website": "harpervoit.com",
    "Notes": "Hours: by appointment, open house Memorial and Thanksgiving weekends"
  },
  {
    "Name": "HAZELFERN",
    "Address": "4008 NE Zimri Dr Newberg, OR, 97132",
    "Phone": "503-928-1893",
    "Email": "llaing@hazelferncellars.com",
    "Website": "www.hazelfern.com",
    "Notes": "Thursday-Monday 11am-4pm by appointment"
  },
  {
    "Name": "HELIOTERRA WINES",
    "Address": "2025 SE Seventh Avenue Portland, OR, 97214",
    "Phone": "503-757-5881",
    "Email": "info@Helioterrawines.com",
    "Website": "Helioterrawines.com",
    "Notes": "Private tours and tastings, by appointment only"
  },
  {
    "Name": "HONEYWOOD WINERY",
    "Address": "1350 Hines Street SE Salem, OR 97302",
    "Phone": "503-362-4111",
    "Email": "",
    "Website": "honeywoodwinery.com",
    "Notes": "Hours: Monday-Friday 9-5, Saturday 10-5, Sunday 11-5"
  },
  {
    "Name": "HYLAND ESTATES",
    "Address": "20980 NE Niederberger Road Dundee, OR 97115",
    "Phone": "503-554-4200",
    "Email": "info@hylandestates.com",
    "Website": "hylandestateswinery.com",
    "Notes": "10am-5pm daily by reservation"
  },
  {
    "Name": "ILLAHE VINEYARDS",
    "Address": "3275 Ballard Road Dallas, OR 97338",
    "Phone": "503-831-1248",
    "Email": "bethany@illahevineyards.com",
    "Website": "illahevineyards.com",
    "Notes": "Memorial Day-Labor Day 11-5 Friday-Sunday by reservation, or by private appointment other days"
  },
  {
    "Name": "IOTA CELLARS",
    "Address": "7895 SE Amity Road Amity, OR 97101",
    "Phone": "503-507-8063",
    "Email": "info@iotacellars.com",
    "Website": "iotacellars.com",
    "Notes": "Hours: By appointment"
  },
  {
    "Name": "IRIS VINEYARDS",
    "Address": "82110 Territorial Hwy Eugene, OR, 97405",
    "Phone": "541-242-6588",
    "Email": "contact@irisvineyards.com",
    "Website": "www.irisvineyards.com",
    "Notes": "12 – 6, Monday - Sunday winter hours: Thurs-Monday 12-6"
  },
  {
    "Name": "J. CHRISTOPHER WINES",
    "Address": "17150 NE Hillside Drive Newberg, OR 97132",
    "Phone": "503-554-9572",
    "Email": "info@jchristopherwines.com",
    "Website": "jchristopherwines.com",
    "Notes": "Hours: Daily Tastings at 10am, 12pm and 2pm. Call for an appointment!"
  },
  {
    "Name": "J.K. CARRIERE",
    "Address": "9995 NE Parrett Mountain Road Newberg, OR 97132",
    "Phone": "503-554-0721",
    "Email": "linda@jkcarriere.com",
    "Website": "jkcarriere.com",
    "Notes": "Hours: March-Nov 11-4 on Fri-Sat, and by appointment Mon-Thurs, closed Sunday"
  },
  {
    "Name": "JOHAN VINEYARDS",
    "Address": "4285 N Pacific Highway (99W) Rickreall, OR 97371",
    "Phone": "503-623-8642",
    "Email": "info@johanvineyards.com",
    "Website": "johanvineyards.com",
    "Notes": "Daily 11am-4pm by appointment"
  },
  {
    "Name": "K&M WINES, ALCHEMY VINEYARD",
    "Address": "128 W Main Street Carlton, OR 97111",
    "Phone": "503-625-3236",
    "Email": "ken@kandmwines.com",
    "Website": "kandmwines.com",
    "Notes": "Hours: 12-5 Wednesday-Monday, closed Tuesdays"
  },
  {
    "Name": "KEELER ESTATE VINEYARD",
    "Address": "5100 SE Rice Lane Amity, OR, 97101",
    "Phone": "503-687-2618",
    "Email": "info@keelerestatevineyard.com",
    "Website": "www.keelerestatevineyard.com",
    "Notes": "Thursdays - Sundays, 11am to 5pm. Open Memorial Day, Labor Day, Thanksgiving, otherwise by appointment."
  },
  {
    "Name": "KELLEY FOX WINES",
    "Address": "26421 Highway 47 Gaston, OR 97119",
    "Phone": "503-679-5786",
    "Email": "kelley@kelleyfoxwines.com",
    "Website": "kelleyfoxwines.com",
    "Notes": "Tastings available by appointment"
  },
  {
    "Name": "KEN WRIGHT CELLARS",
    "Address": "120 N Pine Street Carlton, OR 97111",
    "Phone": "503-852-7010",
    "Email": "orders@kenwrightcellars.com",
    "Website": "kenwrightcellars.com",
    "Notes": "Hours: Sunday-Thursday 11-5, Friday & Saturday 11-6 at ADEA Wine Company"
  },
  {
    "Name": "KING ESTATE WINERY",
    "Address": "80854 Territorial Hwy Eugene, OR, 97405",
    "Phone": "541-942-9874",
    "Email": "",
    "Website": "www.kingestate.com",
    "Notes": "Open daily at 11 a.m., 10 a.m. weekends, until 8 p.m. (9 p.m. on Friday/Saturday)."
  },
  {
    "Name": "KNUDSEN VINEYARDS",
    "Address": "9419 NE Worden Hill Rd. Dundee, OR, 97115",
    "Phone": "503-580-1596",
    "Email": "info@knudsenvineyards.com",
    "Website": "www.knudsenvineyards.com",
    "Notes": "10:30am-4:40pm by reservation only"
  },
  {
    "Name": "KRAMER VINEYARDS",
    "Address": "26830 NW Olson Road Gaston, OR 97119",
    "Phone": "503-662-4545",
    "Email": "customerservice@kramervineyards.com",
    "Website": "kramervineyards.com",
    "Notes": "Hours: April-Oct 11-5 daily, Nov-March 11-5 Thurs-Sun, Closed on major holidays."
  },
  {
    "Name": "L'ANGOLO ESTATE",
    "Address": "18830 NE Williamson Rd Newberg, OR, 97132",
    "Phone": "503-538-7953",
    "Email": "wine@langoloestate.co",
    "Website": "www.langoloestate.com",
    "Notes": "By appointment only, available Thursday-Monday at 11am, 1pm and 3pm. Email reservations@langoloestate.com."
  },
  {
    "Name": "LACHINI VINEYARDS",
    "Address": "18225 NE Calkins Lane Newberg, OR 97132",
    "Phone": "503-864-4553",
    "Email": "tastingrooms@lachinivineyards.com",
    "Website": "lachinivineyards.com",
    "Notes": "By Appointment 11:30am - 4:30pm"
  },
  {
    "Name": "LADY HILL WINERY",
    "Address": "8400 Champoeg Rd St Paul, OR, 97137",
    "Phone": "503-678-1240",
    "Email": "tastingroom@ladyhill.com",
    "Website": "ladyhill.com",
    "Notes": "Open Sunday through Thursday 11 am - 5 pm, Fridays and Saturdays 11 am - 7 pm. Open for outdoor tastings only, or for retail, curbside pick up, local delivery and shipping orders."
  },
  {
    "Name": "LANGE ESTATE WINERY & VINEYARDS",
    "Address": "18380 NE Buena Vista Drive Dundee, OR 97115",
    "Phone": "503-538-6476",
    "Email": "tastingroom@langewinery.com",
    "Website": "langewinery.com",
    "Notes": "Hours: 11-5 daily, private tours available by appointment"
  },
  {
    "Name": "LAUREL RIDGE WINERY",
    "Address": "13301 NE Kuehne Road Carlton, OR 97111",
    "Phone": "503-852-7050",
    "Email": "",
    "Website": "laurelridgewinery.com",
    "Notes": "Hours: 11am-5pm daily"
  },
  {
    "Name": "LAVINEA",
    "Address": "801 N Scott St Carlton, OR, 97111",
    "Phone": "503-852-6100",
    "Email": "greatwines@lavinea.com",
    "Website": "www.lavinea.com",
    "Notes": "Tasting by appointment, please email greatwines@lavinea.com to schedule At The Carlton Winemakers Studio"
  },
  {
    "Name": "LE CADEAU VINEYARD",
    "Address": "1326 N Highway 99W Dundee, OR 97115",
    "Phone": "503-625-2777",
    "Email": "",
    "Website": "lecadeauvineyard.com",
    "Notes": "Hours: 11-5"
  },
  {
    "Name": "LEFT COAST ESTATE",
    "Address": "4225 N Pacific Highway 99W Rickreall, OR 97371",
    "Phone": "503-831-4916",
    "Email": "hospitality@leftcoastcellars.com",
    "Website": "leftcoastwine.com",
    "Notes": "12-5 daily for retail sales and curbside pickup only"
  },
  {
    "Name": "LEMELSON VINEYARDS",
    "Address": "12020 NE Stag Hollow Road Carlton, OR 97111",
    "Phone": "503-852-6619",
    "Email": "",
    "Website": "lemelsonvineyards.com",
    "Notes": "Everyday 11-4"
  },
  {
    "Name": "LENNÉ ESTATE",
    "Address": "18760 NE Laughlin Road Yamhill, OR 97148",
    "Phone": "503-956-2256",
    "Email": "eric@lenneestate.com",
    "Website": "lenneestate.com",
    "Notes": "Thursday-Sunday 12-5; Tuesday & Wednesday by appointment"
  },
  {
    "Name": "LINGUA FRANCA",
    "Address": "9675 Hopewell Rd Salem, OR, 97304",
    "Phone": "503-687-3005",
    "Email": "info@linguafranca.wine",
    "Website": "www.linguafranca.wine",
    "Notes": "Friday-Sunday by appointment only"
  },
  {
    "Name": "LONGPLAY WINE / LIA’S VINEYARD",
    "Address": "215 E First Street Newberg, OR 97132",
    "Phone": "503-489-8466",
    "Email": "info@longplaywine.com",
    "Website": "longplaywine.com",
    "Notes": "Hours: Saturday & Sunday 11-5, First Fridays 3-9pm, or cheerfully by appointment"
  },
  {
    "Name": "MAD VIOLETS WINE CO",
    "Address": "17429 NE Hillside Dr Newberg, OR, 97132",
    "Phone": "503-710-8482",
    "Email": "sales@madvioletswineco.com",
    "Website": "madvioletswineco.com",
    "Notes": "By appointment Thursday-Monday"
  },
  {
    "Name": "MARTIN WOODS",
    "Address": "20500 SW Eagle Point Road McMinnville, OR, 97128",
    "Phone": "503-376-8285",
    "Email": "Evan@martinwoodswinery.com",
    "Website": "www.martinwoodswinery.com",
    "Notes": "By Appointment"
  },
  {
    "Name": "MATZINGER DAVIES WINE COMPANY",
    "Address": "30835 OR-99W Newberg, OR, 97132",
    "Phone": "503-437-0155",
    "Email": "anna@matzingerdavies.com",
    "Website": "www.matzingerdavies.com",
    "Notes": "10am-5pm daily at REXHILL Winery Tasting Room"
  },
  {
    "Name": "MAYSARA WINERY & MOMTAZI VINEYARD",
    "Address": "15765 SW Muddy Valley Road McMinnville, OR 97128",
    "Phone": "503-843-1234",
    "Email": "tastingroom@maysara.com",
    "Website": "maysara.com",
    "Notes": "Hours: Monday-Saturday 11am-4:30pm by appointment. Closed Sunday."
  },
  {
    "Name": "METHVEN FAMILY VINEYARDS",
    "Address": "11400 Westland Lane Dayton, OR 97114",
    "Phone": "503-868-7259",
    "Email": "",
    "Website": "methvenfamilyvineyards.com",
    "Notes": "12-8pm daily"
  },
  {
    "Name": "MONKSGATE VINEYARD",
    "Address": "9500 NE Oak Springs Farm Road Carlton, OR 97111",
    "Phone": "503-852-6521",
    "Email": "Rebecca@monksgate.com",
    "Website": "monksgate.com",
    "Notes": "Hours: By appointment 7 days a week, 12-5pm."
  },
  {
    "Name": "MONTINORE ESTATE",
    "Address": "3663 SW Dilley RoadForest Grove, OR 97116",
    "Phone": "503-359-5012",
    "Email": "info@montinore.com",
    "Website": "montinore.com",
    "Notes": "Curbside Pick-Up Available Fri & Sat with Appointment"
  },
  {
    "Name": "MORGEN LONG",
    "Address": "9675 Hopewell Rd NW Salem, OR, 97304",
    "Phone": "541-954-8958",
    "Email": "wine@morgenlong.com",
    "Website": "www.morgenlong.com",
    "Notes": "By appointment"
  },
  {
    "Name": "NATALIE’S ESTATE WINERY",
    "Address": "16825 NE Chehalem Drive Newberg, OR 97132",
    "Phone": "503-807-5008",
    "Email": "nataliesestatewinery@gmail.comnataliesestatewinery.com",
    "Website": "nataliesestatewinery.com",
    "Notes": "Hours: 11am-5pm daily by appointment"
  },
  {
    "Name": "NATIVE FLORA",
    "Address": "11812 NE Worden Hill Rd Newberg, OR, 97132",
    "Phone": "503-504-1990",
    "Email": "gonative@nativeflora.comwww.nativeflora.com",
    "Website": "www.nativeflora.com",
    "Notes": "By appointment"
  },
  {
    "Name": "NYSA VINEYARD",
    "Address": "18655 NE Trunk Rd Dundee, OR, 97115",
    "Phone": "503-538-3604",
    "Email": "michael@nysavineyard.comwww.nysavineyard.com",
    "Website": "www.nysavineyard.com",
    "Notes": ""
  },
  {
    "Name": "OWEN ROE",
    "Address": "2761 E Ninth Street Newberg, OR 97132",
    "Phone": "503-831-7054",
    "Email": "winery@owenroe.comowenroe.com",
    "Website": "owenroe.com",
    "Notes": ""
  },
  {
    "Name": "PATRICIA GREEN CELLARS",
    "Address": "15225 NE North Valley Road Newberg, OR 97132",
    "Phone": "503-554-0821",
    "Email": "",
    "Website": "patriciagreencellars.com",
    "Notes": "Hours: daily by appointment only!"
  },
  {
    "Name": "PATTON VALLEY VINEYARD",
    "Address": "9449 SW Old Highway 47 Gaston, OR 97119",
    "Phone": "503-985-3445",
    "Email": "",
    "Website": "pattonvalley.com",
    "Notes": "Hours: Thursday - Monday 11am-5pm"
  },
  {
    "Name": "PENNER-ASH WINE CELLARS",
    "Address": "15771 NE Ribbon Ridge Road Newberg, OR 97132",
    "Phone": "503-554-5545",
    "Email": "Hospitality@pennerash.compennerash.com",
    "Website": "pennerash.com",
    "Notes": "Daily by appointment only"
  },
  {
    "Name": "PIKE ROAD WINES",
    "Address": "105 W Main St Carlton, OR, 97111",
    "Phone": "503-852-3185",
    "Email": "info@pikeroadwines.com",
    "Website": "www.pikeroadwines.com",
    "Notes": "Tastings by appointment only"
  },
  {
    "Name": "PLUM HILL VINEYARDS",
    "Address": "6505 SW Old Highway 47 Gaston, OR 97119",
    "Phone": "503-359-4706",
    "Email": "Plumhill@frontier.com",
    "Website": "plumhillwine.com",
    "Notes": "Hours: 11-5 Mon-Sat, 12-5 Sun"
  },
  {
    "Name": "PONZI VINEYARDS",
    "Address": "19500 SW Mountain Home Road Sherwood, OR 97140",
    "Phone": "503-628-1227",
    "Email": "info@ponzivineyards.com",
    "Website": "ponzivineyards.com",
    "Notes": "12 - 4pm"
  },
  {
    "Name": "PURPLE HANDS WINERY",
    "Address": "1200 N Hwy 99W Dundee, OR 97115",
    "Phone": "503-538-9095",
    "Email": "cellar@purplehandswine.com",
    "Website": "purplehandswine.com",
    "Notes": "11am-4pm daily by appointment"
  },
  {
    "Name": "R. STUART & CO. WINERY",
    "Address": "528 NE Fifth Street McMinnville, OR 97128",
    "Phone": "503-472-4477",
    "Email": "winebar@rstuartandco.com",
    "Website": "rstuartandco.com",
    "Notes": "By appointment only"
  },
  {
    "Name": "RAIN DANCE VINEYARDS",
    "Address": "26355 NE Bell Rd Newberg, OR, 97132",
    "Phone": "503-538-0197",
    "Email": "info@raindancevineyards.com",
    "Website": "www.raindancevineyards.com",
    "Notes": "Thursday-Sunday 11am-5pm by appointment only"
  },
  {
    "Name": "RAPTOR RIDGE WINERY",
    "Address": "18700 SW Hillsboro Highway Newberg, OR 97132",
    "Phone": "503-628-8463",
    "Email": "",
    "Website": "raptorridgewinery.com",
    "Notes": "We are currently closed to the public for wine tasting. Curbside pick up appointments are available."
  },
  {
    "Name": "REDHAWK VINEYARD & WINERY",
    "Address": "2995 Michigan City Lane NW Salem, OR 97304",
    "Phone": "503-362-1596",
    "Email": "",
    "Website": "redhawkwine.com",
    "Notes": "Hours: 11-5 daily"
  },
  {
    "Name": "REMY WINES",
    "Address": "17495 NE McDougall Road Dayton, OR 97114",
    "Phone": "503-864-8777",
    "Email": "info@remywines.com",
    "Website": "remywines.com",
    "Notes": "12-5 daily porch pick up, Friday-Monday tasting by appointment only"
  },
  {
    "Name": "RÉSONANCE",
    "Address": "12050 NW Meadow Lake Rd Carlton, OR, 97111",
    "Phone": "971-999-1603",
    "Email": "info@resonancewines.com",
    "Website": "resonancewines.com",
    "Notes": "11-5pm Daily"
  },
  {
    "Name": "REX HILL",
    "Address": "30835 N Hwy 99W Newberg, OR 97132",
    "Phone": "503-538-0666",
    "Email": "info@REXHILL.com",
    "Website": "REXHILL.com",
    "Notes": "Saturday & Sunday: By Appointment"
  },
  {
    "Name": "ROCO WINERY",
    "Address": "13260 NE Red Hills Road Newberg, OR 97132",
    "Phone": "503-538-7625",
    "Email": "info@rocowinery.com",
    "Website": "rocowinery.com",
    "Notes": "10am-4pm daily by reservation only, curbside pick up available"
  },
  {
    "Name": "ROSE AND ARROW ESTATE",
    "Address": "531 Highway 99W Dundee, OR 97115",
    "Phone": "503-308-9225",
    "Email": "info@rosearrowestate.com",
    "Website": "rosearrowestate.com",
    "Notes": "Thursday - Sunday noon-5; Monday - Wednesday by appointment"
  },
  {
    "Name": "RR WINES",
    "Address": "801 N Scott St Carlton, OR 97111",
    "Phone": "503-984-7434",
    "Email": "harrypn@rrwines.com",
    "Website": "www.rrwines.com",
    "Notes": "at The Carlton Winemakers Studio"
  },
  {
    "Name": "RUBY VINEYARD & WINERY",
    "Address": "30088 SW Egger Rd Hillsboro, OR, 97123",
    "Phone": "503-628-7829",
    "Email": "info@rubyvineyard.com",
    "Website": "www.rubyvineyard.com",
    "Notes": "11am-5pm daily by appointment only"
  },
  {
    "Name": "SAFFRON FIELDS VINEYARD",
    "Address": "18748 NE Laughlin Road Yamhill, OR 97148",
    "Phone": "503-662-5323",
    "Email": "info@saffronfields.com",
    "Website": "saffronfields.com",
    "Notes": "11am-5pm daily by appointment only"
  },
  {
    "Name": "SEUFERT WINERY",
    "Address": "415 Ferry Street Dayton, OR 97114",
    "Phone": "503-864-2946",
    "Email": "",
    "Website": "seufertwinery.com",
    "Notes": "Hours: Friday-Sunday 11-5 by appointment"
  },
  {
    "Name": "SHEA WINE CELLARS",
    "Address": "12321 NE Highway 240 Newberg, OR 97132",
    "Phone": "503-241-6527",
    "Email": "",
    "Website": "sheawinecellars.com",
    "Notes": "Hours: Memorial and Thanksgiving weekends, by appointment seasonally"
  },
  {
    "Name": "SILTSTONE WINES",
    "Address": "12251 SE Dayton Bypass (Hwy 18) Dayton, OR 97114",
    "Phone": "971-241-9365",
    "Email": "heather@siltstonewines.com",
    "Website": "siltstonewines.com",
    "Notes": "Open Saturdays & Sundays 12-5pm, curbside pickup available"
  },
  {
    "Name": "SILVAN RIDGE WINERY",
    "Address": "27012 Briggs Hill Road Eugene, OR 97405",
    "Phone": "541-345-1945",
    "Email": "info@silvanridge.com",
    "Website": "www.silvanridge.com",
    "Notes": "12-5 pm daily"
  },
  {
    "Name": "SINEANN",
    "Address": "8400 Champoeg Rd. St. Paul, OR 97137",
    "Phone": "503-341-2698",
    "Email": "",
    "Website": "sineann.com",
    "Notes": "Hours: by appointment at Lady Hill Winery"
  },
  {
    "Name": "SIX PEAKS",
    "Address": "19495 SW Vista Hill Dr Hillsboro, OR 97123",
    "Phone": "503-341-3618",
    "Email": "",
    "Website": "sixpeakswine.com",
    "Notes": "Memorial Day and Thanksgiving Weekend and by appointment"
  },
  {
    "Name": "SOKOL BLOSSER WINERY",
    "Address": "5000 Sokol Blosser Lane Dayton, OR 97114",
    "Phone": "503-864-2282",
    "Email": "info@sokolblosser.com",
    "Website": "sokolblosser.com",
    "Notes": "Thursday-Sunday 10am-4pm, Reservations Recommended"
  },
  {
    "Name": "SOLÉNA ESTATE",
    "Address": "17096 NE Woodland Loop Road Yamhill, OR 97148",
    "Phone": "503-662-3700",
    "Email": "YamhillTR@SolenaEstate.com",
    "Website": "solenaestate.com",
    "Notes": "By reservation only; see website to book."
  },
  {
    "Name": "SOTER VINEYARDS",
    "Address": "10880 NE Mineral Springs Road Carlton, OR 97111",
    "Phone": "503-662-5600",
    "Email": "",
    "Website": "sotervineyards.com",
    "Notes": "Hours: seven days a week by appointment"
  },
  {
    "Name": "ST. INNOCENT WINERY",
    "Address": "10052 Enchanted Way SE Jefferson, OR 97352",
    "Phone": "503-378-1526",
    "Email": "Info@stinnocentwine.com",
    "Website": "stinnocentwine.com",
    "Notes": "Hours: 11-5 daily, by appointment only. Closed holidays."
  },
  {
    "Name": "STAG HOLLOW",
    "Address": "7930 NE Blackburn Road Yamhill, OR 97148",
    "Phone": "503-662-5609",
    "Email": "",
    "Website": "staghollow.com",
    "Notes": "Hours: Memorial Day and Thanksgiving weekends and by appointment"
  },
  {
    "Name": "STANGELAND VINEYARDS & WINERY",
    "Address": "8500 Hopewell Road NW Salem, OR 97304",
    "Phone": "503-581-0355",
    "Email": "stangelandwinery@onlinenw.com",
    "Website": "stangelandwinery.com",
    "Notes": "Hours: June-Dec 12-5 Tue-Sun, Jan-May weekends 12-5, or by appointment"
  },
  {
    "Name": "STOLLER FAMILY ESTATE",
    "Address": "16161 NE McDougall Road Dayton, OR 97114",
    "Phone": "503-864-3404",
    "Email": "info@stollerfamilyestate.com",
    "Website": "stollerfamilyestate.com",
    "Notes": "By Appointment Only"
  },
  {
    "Name": "STYRING",
    "Address": "19960 NE Ribbon Ridge Road Newberg, OR 97132",
    "Phone": "503-866-6741",
    "Email": "kelley@styringvineyards.com",
    "Website": "www.styringvineyards.biz",
    "Notes": "Now: Drive-Thru Saturdays 12 - 3 (no advance purchase necessary); Saturday Picnic Spots by Reservation. Future: Please check back for updates or text 503-866-6741."
  },
  {
    "Name": "SWEET CHEEKS WINERY",
    "Address": "27007 Briggs Hill Road Eugene, OR 97405",
    "Phone": "541-349-9463",
    "Email": "info@sweetcheekswinery.com",
    "Website": "sweetcheekswinery.com",
    "Notes": "Hours: Weekdays 12-6pm, 2-8pm Friday, 11am - 6pm Saturday & Sunday"
  },
  {
    "Name": "TENDRIL WINE CELLARS",
    "Address": "130 W Monroe Carlton, OR 97111",
    "Phone": "503-858-4524",
    "Email": "tastings@tendrilwines.com",
    "Website": "tendrilwines.com",
    "Notes": "Hours: Wednesday-Sunday 11am-4pm. We welcome guests for a unique in depth tasting experience. Please call ahead to ensure we have space to accommodate you at our winery located in"
  },
  {
    "Name": "TERRA VINA WINES",
    "Address": "33750 SW Ladd Hill Road Wilsonville, OR 97070",
    "Phone": "503-925-0712",
    "Email": "tvw@terravinawines.com",
    "Website": "terravinawines.com",
    "Notes": "Vineyard Open 2nd & 4th Saturday of the month / McMinnville Friday - Sunday / Seated tastings by reservations."
  },
  {
    "Name": "THE EYRIE VINEYARDS",
    "Address": "935 NE 10th Avenue McMinnville, OR 97128",
    "Phone": "503-472-6315",
    "Email": "info@eyrievineyards.com",
    "Website": "eyrievineyards.com",
    "Notes": "12-5 daily"
  },
  {
    "Name": "THE FOUR GRACES",
    "Address": "9605 NE Fox Farm Road Dundee, OR 97115",
    "Phone": "503-554-8000",
    "Email": "info@thefourgraces.com",
    "Website": "thefourgraces.com",
    "Notes": "11-5 daily"
  },
  {
    "Name": "THE GREAT OREGON WINE COMPANY",
    "Address": "2155 NE Lafayette Ave McMinnville, OR, 97128",
    "Phone": "503-434-9025",
    "Email": "",
    "Website": "www.greatoregonwine.com",
    "Notes": "By appointment only"
  },
  {
    "Name": "THE POTTER’S VINEYARD & CLAY ART GALLERY",
    "Address": "14725 NE Quarry Rd. Newberg, OR 97132",
    "Phone": "503-504-3796",
    "Email": "sandy@pottersvineyard.com",
    "Website": "www.pottersvineyard.com",
    "Notes": "11am-5 pm daily by appointment only"
  },
  {
    "Name": "TORII MOR",
    "Address": "18323 NE Fairview Drive Dundee, OR 97115",
    "Phone": "503-538-2279",
    "Email": "info@toriimorwinery.com",
    "Website": "toriimorwinery.com",
    "Notes": "Hours: 11-5 daily, reservations required"
  },
  {
    "Name": "TRESORI VINEYARDS",
    "Address": "17940 N Kings Grade Road Newberg, OR 97132",
    "Phone": "503-550-2027",
    "Email": "dave.tresori@gmail.com",
    "Website": "tresorivineyards.com",
    "Notes": "Hours: Thursday-Monday 11am-5pm, closed January"
  },
  {
    "Name": "TRISAETUM WINERY",
    "Address": "18401 Ribbon Ridge Road Newberg, OR 97132",
    "Phone": "503-538-9898",
    "Email": "info@trisaetum.com",
    "Website": "www.trisaetum.com",
    "Notes": "Hours: 11-4 Daily"
  },
  {
    "Name": "TROUT LILY RANCH",
    "Address": "17800 NE Hillside Drive Newberg, OR, 97132",
    "Phone": "503-888-6410",
    "Email": "jacob@troutlilyranchpinot.com",
    "Website": "www.troutlilyranchpinot.com",
    "Notes": "By appointment"
  },
  {
    "Name": "TUMWATER VINEYARD",
    "Address": "375 SW Barrel House Way West Linn, OR, 97068",
    "Phone": "503-454-0208",
    "Email": "sales@tumwatervineyard.com",
    "Website": "www.tumwatervineyard.com",
    "Notes": "Sunday's from 12 to 5:30 pm, by appointment. See website for special event schedule."
  },
  {
    "Name": "TWOMEY CELLARS",
    "Address": "19926 NE Fairview Dr Dundee, OR 97115",
    "Phone": "503-333-0739",
    "Email": "tours@twomey.com",
    "Website": "www.twomey.com",
    "Notes": "Thursday-Sunday by appointment"
  },
  {
    "Name": "UNION WINE COMPANY",
    "Address": "19550 SW Cipole Road Tualatin, OR 97062",
    "Phone": "971-322-4791",
    "Email": "info@unionwinecompany.com",
    "Website": "unionwinecompany.com",
    "Notes": "Hours: by appointment only"
  },
  {
    "Name": "UTOPIA VINEYARD",
    "Address": "17445 NE Ribbon Ridge Road Newberg, OR 97132",
    "Phone": "503-687-1671",
    "Email": "dan@utopiawine.com",
    "Website": "utopiawine.com",
    "Notes": "By appointment only"
  },
  {
    "Name": "VAN DUZER VINEYARDS",
    "Address": "11975 Smithfield Road Dallas, OR 97338",
    "Phone": "800-884-1927",
    "Email": "hospitality@vanduzer.com",
    "Website": "vanduzer.com",
    "Notes": "Hours: 11-5 daily"
  },
  {
    "Name": "VIDON VINEYARD",
    "Address": "17425 NE Hillside Drive Newberg, OR 97132",
    "Phone": "503-538-4092",
    "Email": "info@vidonvineyard.com",
    "Website": "www.vidonvineyard.com",
    "Notes": "By Appointment Daily"
  },
  {
    "Name": "WALTER SCOTT WINES",
    "Address": "6130 Bethel Heights Road NW Salem, OR 97304",
    "Phone": "971-209-7786",
    "Email": "info@walterscottwines.com",
    "Website": "walterscottwines.com",
    "Notes": "Hours: by appointment, open Memorial Day and Thanksgiving weekends"
  },
  {
    "Name": "WESTMOUNT",
    "Address": "20980 NE Niederberger Rd Dundee, OR, 97115",
    "Phone": "503-476-0206",
    "Email": "info@westmountwine.com",
    "Website": "www.westmountwine.com",
    "Notes": ""
  },
  {
    "Name": "WESTREY WINE COMPANY",
    "Address": "1065 NE Alpine Avenue McMinnville, OR 97128",
    "Phone": "503-434-6357",
    "Email": "",
    "Website": "westrey.com",
    "Notes": "Hours: 11am-5pm"
  },
  {
    "Name": "WHITE ROSE ESTATE",
    "Address": "6250 NE Hilltop Lane Dayton, OR 97114",
    "Phone": "503-864-2328",
    "Email": "",
    "Website": "whiteroseestate.com",
    "Notes": "Hours: 11-5 daily by appointment only"
  },
  {
    "Name": "WILLAKENZIE ESTATE",
    "Address": "19143 NE Laughlin Road Yamhill, OR 97148",
    "Phone": "503-662-3280",
    "Email": "hospitality@willakenzie.com",
    "Website": "www.willakenzie.com",
    "Notes": "Hours: 10-5 daily by appointment only"
  },
  {
    "Name": "WILLAMETTE VALLEY VINEYARDS",
    "Address": "8800 Enchanted Way SE Turner, OR, 97392",
    "Phone": "503-588-9463",
    "Email": "info@wvv.com",
    "Website": "wvv.com",
    "Notes": "11 am - 6 pm daily; extended hours on Fridays until 8 pm"
  },
  {
    "Name": "WINDERLEA VINEYARD & WINERY",
    "Address": "8905 NE Worden Hill Road Dundee, OR 97115",
    "Phone": "503-554-5900",
    "Email": "info@winderlea.com",
    "Website": "winderlea.com",
    "Notes": "Open everyday by appointment from 10am to 4pm. Reservations are required and the absolute maximum number of guests per reservation is 4 people."
  },
  {
    "Name": "WINTER’S HILL ESTATE",
    "Address": "6451 NE Hilltop Lane Dayton, OR 97114",
    "Phone": "503-864-4592",
    "Email": "cellardoor@wintershillwine.com",
    "Website": "wintershillwine.com",
    "Notes": "11-5 daily"
  },
  {
    "Name": "Yamhill VALLEY VINEYARDS",
    "Address": "16250 SW Oldsville Road McMinnville, OR 97128",
    "Phone": "503-843-3100",
    "Email": "info@ Yamhill.com",
    "Website": "www. Yamhill.com",
    "Notes": "11am-4pm, Thursday - Monday"
  },
  {
    "Name": "YOUNGBERG HILL",
    "Address": "10660 SW Youngberg Hill Road McMinnville, OR 97128",
    "Phone": "503-472-2727",
    "Email": "info@youngberghill.com",
    "Website": "youngberghill.com",
    "Notes": "Hours: 10-4 daily Seated wine tasting experiences by appointment offered daily."
  }
]


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('winery', seedWineries, {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('winery', null, {});
  }
};
