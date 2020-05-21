import pandas as pd

text = """let data_recessions = [
  [1969.75, 1970.75],
  [1973.75, 1975.0],
  [1980.0, 1980.5],
  [1981.5, 1982.75],
  [1990.5, 1991.0],
  [2001.0, 2001.75],
  [2007.75, 2009.25],
];
"""
df1 = pd.read_excel("webpage.xlsx")
slider_values = [round(x, 1) for x in df1.iloc[0]]
gaps = [round(x, 3) for x in df1.iloc[34]]

text += "let data_q2gap = {\n" + "\n".join(f"    {x}: {y}," for x, y in zip(slider_values, gaps)) + "\n};\n"


df2 = pd.read_excel("webpage.xlsx", sheet_name="Tabelle2")
years = df2["Var1_1"].values

text += "let data_years = [\n" + "\n".join(f"    {year}," for year in years) + "\n];\n"
gaps = [round(val / 100, 5) for val in df2["Var1_2"].values]
text += "let data_hist_gap = [\n" + "\n".join(f"    {gap}," for gap in gaps) + "\n];\n"

columns = ["Indicator", "April", "May", "June"]

indicators = [
    "Federal Funds Rate (%)",
    "Term Spread",
    "BAA-AAA",
    "S&P 500 growth (%)",
    "Consumer sentiment (indx.)",
    "Initial claims (`000 wkl. Avg.)",
    "Employment growth (`000)",
    "Unemployment rate (%)",
    "Monthly CPI Inflation (%)",
    "IP growth (%)",
    "Housing starts (`000)",
]

# let mountains = [
#   { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
#   { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" },
#   { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
#   { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
#   { name: "Monte Amiata", height: 1738, place: "Siena" }
# ];


def myround(x):
    if abs(x) >= 100:
        return round(x)
    else:
        return round(x, 3)


for m, col in enumerate(list(df1)):
    values = list(df1[col])
    april = values[1:12]
    may = values[12:23]
    june = values[23:34]
    text += f"let table{str(slider_values[m]).replace('.','')} = [\n"
    for n, indicator in enumerate(indicators):
        t = f"Indicator: '{indicator}', April: {myround(april[n])}, May: {myround(may[n])}, June: {myround(june[n])}"
        text += f"    {{{t}}},\n"
    text+="];\n"

text += "let table_data = {\n"
text += ",\n".join(f"    {slider_value}: table{str(slider_value).replace('.','')}" for slider_value in slider_values)
text += "\n};\n"


with open("data.js", "w") as file:
    file.writelines(text)
