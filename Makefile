hello: 
	awk -F, 'BEGIN{printf("%s %10s %25s %25s \n", "Year", "Sex", "Most Popular Name", "Total Name Amount")} { if ($$5 == 1) {printf("%s %10s %25s %25s\n", $$1, $$2, $$3, $$4) } }' babynames.csv
	