let data_recessions = [
    [1969.75, 1970.75],
    [1973.75, 1975.0],
    [1980.0, 1980.5],
    [1981.5, 1982.75],
    [1990.5, 1991.0],
    [2001.0, 2001.75],
    [2007.75, 2009.25],
    [2020.0, 2020.25],
];
let data_gap = [
    [1967.25, 2.75638410835191],
    [1967.5, 2.78137185427412],
    [1967.75, 2.60018183887982],
    [1968.0, 2.69272213016079],
    [1968.25, 2.96268021588293],
    [1968.5, 2.99794666869999],
    [1968.75, 3.14449153706851],
    [1969.0, 3.11184201547352],
    [1969.25, 3.27053628862493],
    [1969.5, 3.16954922921253],
    [1969.75, 3.4566834057296],
    [1970.0, 2.67174364778173],
    [1970.25, 2.11312868395925],
    [1970.5, 1.11927799614526],
    [1970.75, -0.11119504860565],
    [1971.0, 0.18121395332622],
    [1971.25, 0.527023168150587],
    [1971.5, 0.476401636734614],
    [1971.75, 0.215525056708921],
    [1972.0, 0.0544811208007756],
    [1972.25, 0.490883535003195],
    [1972.5, 0.383257687644445],
    [1972.75, 0.761813272040413],
    [1973.0, 2.04429585907426],
    [1973.25, 2.47245224710895],
    [1973.5, 2.55898785105702],
    [1973.75, 2.54736691277468],
    [1974.0, 2.43083262848396],
    [1974.25, 2.24496340771969],
    [1974.5, 1.78558636727579],
    [1974.75, -0.137769952387268],
    [1975.0, -3.03055330893475],
    [1975.25, -4.10797814298118],
    [1975.5, -3.40165991825316],
    [1975.75, -3.1197848432119],
    [1976.0, -2.77052060694069],
    [1976.25, -2.13952569426695],
    [1976.5, -2.29045427355074],
    [1976.75, -2.52547811040783],
    [1977.0, -2.10259187034476],
    [1977.25, -1.43482786382844],
    [1977.5, -0.803619755896756],
    [1977.75, -0.30162836870371],
    [1978.0, 0.0975054261114217],
    [1978.25, 0.606394520480902],
    [1978.5, 0.777123512579436],
    [1978.75, 1.19690695151031],
    [1979.0, 1.13375919856005],
    [1979.25, 1.1353754936404],
    [1979.5, 0.962384246191594],
    [1979.75, 0.89824408809156],
    [1980.0, 0.374925186438468],
    [1980.25, -2.04964833296694],
    [1980.5, -3.13410507366588],
    [1980.75, -2.06396837137587],
    [1981.0, -1.8701723152543],
    [1981.25, -2.35960689396889],
    [1981.5, -2.07421330041733],
    [1981.75, -3.63671635845667],
    [1982.0, -4.38553497710266],
    [1982.25, -4.79963728011165],
    [1982.5, -6.10528703641389],
    [1982.75, -7.17326323327985],
    [1983.0, -6.37623841631125],
    [1983.25, -6.20432052912232],
    [1983.5, -4.75365428317665],
    [1983.75, -3.58147825750583],
    [1984.0, -3.49859523000756],
    [1984.25, -2.79936875793376],
    [1984.5, -3.16475357702969],
    [1984.75, -2.57082627880928],
    [1985.0, -2.3250767186574],
    [1985.25, -2.53789872232955],
    [1985.5, -2.18440641234352],
    [1985.75, -1.95276160757679],
    [1986.0, -2.12147671907538],
    [1986.25, -2.30233776310587],
    [1986.5, -2.0392874939788],
    [1986.75, -1.92600782170188],
    [1987.0, -1.30783608012108],
    [1987.25, -0.835087279703417],
    [1987.5, -0.472297393458776],
    [1987.75, 0.174535710599244],
    [1988.0, 0.0707585214631434],
    [1988.25, 0.293275595211728],
    [1988.5, 0.230218049885966],
    [1988.75, 0.5372393662469],
    [1989.0, 0.820820402744293],
    [1989.25, 0.764006272650009],
    [1989.5, 0.508210452498381],
    [1989.75, 0.253569787798358],
    [1990.0, 0.509196161470804],
    [1990.25, 0.609425698880273],
    [1990.5, 0.745785904427976],
    [1990.75, 0.634539206230134],
    [1991.0, -0.505454693056617],
    [1991.25, -0.775568919176795],
    [1991.5, -0.522620652853756],
    [1991.75, -0.231841564894852],
    [1992.0, -0.443699603841841],
    [1992.25, -0.851018576789941],
    [1992.5, -0.452320739690526],
    [1992.75, -0.742213466057295],
    [1993.0, -0.284965771534973],
    [1993.25, -0.0835941297867571],
    [1993.5, 0.491254145200704],
    [1993.75, 0.234595460653719],
    [1994.0, -0.189444226719282],
    [1994.25, 0.342300908929083],
    [1994.5, 0.673624161147379],
    [1994.75, 0.933157431796516],
    [1995.0, 1.2641917832471],
    [1995.25, 0.853729473420128],
    [1995.5, 0.550679673354515],
    [1995.75, 0.763279872747535],
    [1996.0, 0.763537165434647],
    [1996.25, 0.73062247456912],
    [1996.5, 0.856373696093526],
    [1996.75, 0.685930061811368],
    [1997.0, 0.70345866353918],
    [1997.25, 0.767897029186426],
    [1997.5, 0.767193837333924],
    [1997.75, 1.07327834433166],
    [1998.0, 0.90286424354058],
    [1998.25, 1.13552548362237],
    [1998.5, 1.14080030141885],
    [1998.75, 0.95161601437348],
    [1999.0, 0.93800533065338],
    [1999.25, 1.06895055312259],
    [1999.5, 1.24798964090136],
    [1999.75, 1.50151910538829],
    [2000.0, 1.41794592214792],
    [2000.25, 1.50615591629715],
    [2000.5, 1.52002224765784],
    [2000.75, 1.7398976908704],
    [2001.0, 1.90346907978356],
    [2001.25, 1.73248302823574],
    [2001.5, 1.64863138518541],
    [2001.75, 0.691182629885945],
    [2002.0, -0.195558577651866],
    [2002.25, -0.188354359578957],
    [2002.5, 0.522867241516489],
    [2002.75, 0.43727220039973],
    [2003.0, 0.794567594369133],
    [2003.25, -0.080235256775274],
    [2003.5, -0.0571952556812971],
    [2003.75, 0.416233268041766],
    [2004.0, 0.565366384362775],
    [2004.25, 1.00645591226736],
    [2004.5, 1.05157839707886],
    [2004.75, 1.10608160100343],
    [2005.0, 1.45869045909137],
    [2005.25, 1.44036616458996],
    [2005.5, 1.86769806373921],
    [2005.75, 1.69118160399686],
    [2006.0, 1.78730315040598],
    [2006.25, 2.20895385824351],
    [2006.5, 2.02196046348317],
    [2006.75, 1.76333026578215],
    [2007.0, 1.63058404911012],
    [2007.25, 1.88789934068641],
    [2007.5, 1.8453658457575],
    [2007.75, 1.99301497662925],
    [2008.0, 1.78403713058348],
    [2008.25, 2.1285026670542],
    [2008.5, 1.37317764862888],
    [2008.75, -1.31263013403927],
    [2009.0, -3.16409895687165],
    [2009.25, -4.29129622239821],
    [2009.5, -3.8785776317548],
    [2009.75, -3.72160792726854],
    [2010.0, -3.61458887260022],
    [2010.25, -3.1116954859624],
    [2010.5, -2.73631010347449],
    [2010.75, -2.83866838989063],
    [2011.0, -2.39675201754385],
    [2011.25, -2.14007519538202],
    [2011.5, -1.57794792154478],
    [2011.75, -1.66664425218942],
    [2012.0, -1.86536313022443],
    [2012.25, -2.01110177372997],
    [2012.5, -1.98323788124491],
    [2012.75, -1.61493523461776],
    [2013.0, -1.28801289793722],
    [2013.25, -1.0945564175305],
    [2013.5, -0.698684925984794],
    [2013.75, 0.183360540163036],
    [2014.0, 0.420487789053547],
    [2014.25, 1.246325657923],
    [2014.5, 1.38637044295917],
    [2014.75, 1.06277351902209],
    [2015.0, 0.982961220681089],
    [2015.25, 0.913575686831436],
    [2015.5, 1.15833767692217],
    [2015.75, 0.874186338999272],
    [2016.0, 0.999629252760137],
    [2016.25, 1.21253063744866],
    [2016.5, 1.58629357795439],
    [2016.75, 1.48509865345603],
    [2017.0, 1.80507728943733],
    [2017.25, 2.1574121503279],
    [2017.5, 2.40369761071393],
    [2017.75, 2.24230356972996],
    [2018.0, 2.22647390200572],
    [2018.25, 2.25246018326835],
    [2018.5, 2.35170384353947],
    [2018.75, 2.21680009623635],
    [2019.0, 2.15863005680441],
    [2019.25, 2.23013778692049],
    [2019.5, 2.67911453297356],
    [2019.75, 2.47095018412031],
    [2020.0, 2.43191015059667],
    [2020.25, -8.32688039313389],
    [2020.5, -3.52749583297139],
    [2020.75, -0.327256629933936],
];
