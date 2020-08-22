import pandas as pd

text = """let data_recessions = [
    [1969.75, 1970.75],
    [1973.75, 1975.0],
    [1980.0, 1980.5],
    [1981.5, 1982.75],
    [1990.5, 1991.0],
    [2001.0, 2001.75],
    [2007.75, 2009.25],
    [2020.0, 2020.25],
];
"""
df1 = pd.read_excel("webpage.xlsx")

print(df1)

text += (
    "let data_gap = [\n"
    + "\n".join(f"    [{x}, {y}]," for x, y in zip(df1.date.values, df1.outputgap.values))
    + "\n];\n"
)

with open("data.js", "w") as file:
    file.writelines(text)
