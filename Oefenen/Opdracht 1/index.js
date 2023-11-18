const years = [1763, 1972, 1925, 1916, 1984, 1124, 1950, 2020]

function getYears(years) {
  return years.filter(year => year > 1950)
}