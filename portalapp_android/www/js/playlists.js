var playlisturl = function (course, playlist, assessment) {

	/*Alpha playlists*/

	if (course == "Alpha" && playlist == 'A') {
		var exercises=["http://192.168.8.200:8008/learn/khan/math/early-math/cc-early-math-add-sub-basics/cc-early-math-together-apart/put-together/",
						"http://192.168.8.200:8008/learn/khan/math/early-math/cc-early-math-add-sub-basics/cc-early-math-together-apart/take-apart/",
						"http://192.168.8.200:8008/learn/khan/math/early-math/cc-early-math-add-sub-basics/cc-early-math-add-sub-intro/addition-introduction/",
						"http://192.168.8.200:8008/learn/khan/math/early-math/cc-early-math-add-sub-basics/cc-early-math-add-subtract-10/addition-and-subtraction-within-10_1/",
						"http://192.168.8.200:8008/learn/khan/math/early-math/cc-early-math-add-sub-20/cc-early-math-add-20/addition_2/",
						"http://192.168.8.200:8008/learn/khan/math/early-math/cc-early-math-add-sub-20/cc-early-math-sub-20/subtraction_2/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/addition-subtraction/two_dig_add_sub/adding-whole-numbers-and-applications-1/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/addition-subtraction/addition_carrying/addition_3/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/addition-subtraction/addition_carrying/addition_4/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/addition-subtraction/addition_carrying/why-carrying-works/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/addition-subtraction/sub_borrowing/subtraction_3/",
						"http://192.168.8.200:8008/learn/khan/math/early-math/cc-early-math-add-sub-100/cc-early-math-add-sub-100-word-problems/adding-and-subtracting-on-number-line-word-problems/",
						"http://192.168.8.200:8008/learn/khan/math/early-math/cc-early-math-add-sub-100/cc-early-math-add-sub-100-word-problems/adding-and-subtracting-on-the-number-line-word-problems/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/multiplication-division/multiplication_fun/multiplication-2-the-multiplication-tables/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/multiplication-division/multiplication_fun/multiplication_05/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/multiplication-division/delightful_division/division-1/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/multiplication-division/delightful_division/division_05/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/multiplication-division/delightful_division/division_1/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/multiplication-division/multi_digit_multiplication/multiplication_2/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/multiplication-division/multi_digit_multiplication/multiplication_3/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/multiplication-division/multi_digit_multiplication/multiplication_4/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/multiplication-division/long_division/division-2/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/multiplication-division/long_division/division_15/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/multiplication-division/long_division/division_4/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/order-of-operations/order_of_operations/order_of_operations_2/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/order-of-operations/counting-tutorial/counting_1/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/order-of-operations/rounding_whole_numbers/rounding-whole-numbers-1/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/order-of-operations/rounding_whole_numbers/rounding-whole-numbers-2/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/order-of-operations/rounding_whole_numbers/rounding_whole_numbers/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/order-of-operations/ditributive_property/the-distributive-property/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/order-of-operations/ditributive_property/the-distributive-property-2/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/order-of-operations/ditributive_property/distributive_property/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/order-of-operations/place_value/place-value-1/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/order-of-operations/place_value/understanding-place-value-1-exercise/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/order-of-operations/place_value/place_value/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/order-of-operations/place_value/understanding-place-value-1/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/multiplication-division/multi_digit_multiplication/multiplication_15/"

		];
		window.open(exercises[assessment],'_system','location=yes');
	}

	if (course == "Alpha" && playlist == 'B') {
		var exercises=["http://192.168.8.200:8008/learn/khan/math/arithmetic/absolute-value/add-sub-negatives/negative-numbers-introduction/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/absolute-value/add-sub-negatives/number_line_2/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/absolute-value/add-sub-negatives/ordering-negative-numbers/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/absolute-value/add-sub-negatives/number_line_3/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/absolute-value/adding-subtracting-negatives/adding-negative-numbers/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/absolute-value/adding-subtracting-negatives/why-subtracting-a-negative-equivalent-to-adding-a-positive/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/absolute-value/adding-subtracting-negatives/adding_and_subtracting_negative_numbers/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/absolute-value/mult-div-negatives/multiplying-positive-and-negative-numbers/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/absolute-value/mult-div-negatives/dividing-positive-and-negative-numbers/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/absolute-value/mult-div-negatives/multiplying_and_dividing_negative_numbers/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/absolute-value/abs_value_tutorial/absolute-value-and-number-lines/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/absolute-value/abs_value_tutorial/absolute_value/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/absolute-value/abs_value_tutorial/comparing-absolute-values/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/factors-multiples/divisibility_tests/divisibility-tests-for-2-3-4-5-6-9-10/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/factors-multiples/divisibility_tests/recognizing-divisibility/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/factors-multiples/divisibility_tests/divisibility_tests/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/factors-multiples/divisibility-and-factors/finding-factors-of-a-number/",
						"http://192.168.8.200:8008/learn/khan/math/on-sixth-grade-math/on-number-sense-numeration/on-factors-multiples/divisibility/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/factors-multiples/prime_numbers/recognizing-prime-numbers/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/factors-multiples/prime_numbers/composite_numbers/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/factors-multiples/prime-factorization-prealg/prime-factorization/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/factors-multiples/prime-factorization-prealg/common-divisibility-examples/"
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/factors-multiples/least_common_multiple/least-common-multiple-exercise/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/factors-multiples/least_common_multiple/least_common_multiple/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/factors-multiples/greatest_common_divisor/greatest_common_divisor/"
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/factors-multiples/greatest_common_divisor/greatest-common-divisor-factor-exercise/",

		];
		window.open(exercises[assessment],'_system','location=yes');
	}

	if (course == "Alpha" && playlist == 'C') {
		var exercises=["http://192.168.8.200:8008/learn/khan/math/arithmetic/fractions/understanding-fractions/numerator-and-denominator-of-a-fraction/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/fractions/understanding-fractions/recognizing_fractions_0.5/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/fractions/understanding-fractions/recognizing_fractions/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/fractions/understanding-fractions/fractions_on_the_number_line_1/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/fractions/visualizing-equivalent-fractions/visualizing-equivalent-fractions/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/fractions/equivalent-fractions-ddp/equivalent-fractions/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/fractions-pre-alg/comparing-fractions-pre-alg/comparing-fractions/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/fractions/equivalent-fractions-ddp/fractions-in-lowest-terms/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/fractions/equivalent-fractions-ddp/finding-common-denominators/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/fractions/equivalent-fractions-ddp/simplifying_fractions/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/fractions/comparing-fractions/ordering-fractions/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/fractions/comparing-fractions/comparing-fractions-2/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/fractions/adding-and-subtracting-fractions/adding-fractions-with-like-denominators/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/fractions/adding-and-subtracting-fractions/adding_fractions_with_common_denominators/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/fractions/adding-and-subtracting-fractions/subtracting-fractions/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/fractions/adding-and-subtracting-fractions/subtracting_fractions_with_common_denominators/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/fractions/fractions-unlike-denom/adding-fractions-with-unlike-denominators/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/fractions/fractions-unlike-denom/adding-fractions--ex-1/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/fractions/multiplying-fractions/multiplying_fractions_0.5/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/fractions/multiplying-fractions/multiplying_fractions/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/fractions/div-fractions-fractions/dividing-fractions-example/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/fractions/dividing-fractions-tutorial/dividing_fractions/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/fractions/mixed-numbers/proper-and-improper-fractions/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/fractions/mixed-numbers/proper-and-improper-fractions/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/fractions/mixed-numbers/mixed-numbers-and-improper-fractions/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/fractions/mixed-numbers/comparing-improper-fractions-and-mixed-numbers/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/fractions/mixed-numbers/converting-mixed-numbers-to-improper-fractions/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/fractions/mixed-numbers/changing-an-improper-fraction-to-a-mixed-number/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/fractions/mixed-numbers/converting_mixed_numbers_and_improper_fractions/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/fractions/mixed-number-add-sub/adding-mixed-numbers/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/fractions/mixed-number-add-sub/adding-subtracting-mixed-numbers-0-5-ex-1/"
						];

		window.open(exercises[assessment],'_system','location=yes');
	}

	if (course == "Alpha" && playlist == 'D') {
		var exercises=["http://192.168.8.200:8008/learn/khan/math/arithmetic/decimals/decimal-place-value/decimal-place-value/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/decimals/decimal-place-value/comparing-place-values-in-decimals/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/decimals/comparing-decimals/comparing_decimals_1/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/decimals/decimals-on-number-line/positive-and-negative-decimals-on-a-number-line/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/decimals/decimals-on-number-line/decimals_on_the_number_line_1/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/decimals/decimals-on-number-line/points-on-a-number-line/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/decimals/decimals-on-number-line/decimals_on_the_number_line_2/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/decimals/adding-decimals/adding-decimals-example-1/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/decimals/adding-decimals/adding_decimals_2/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/decimals/adding-decimals/adding-decimals-example-2/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/decimals/adding-decimals/subtracting-decimals-up-to-hundredths/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/decimals/adding-decimals/subtracting-decimals-word-problem/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/decimals/adding-decimals/subtracting_decimals/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/decimals-pre-alg/multiplying-decimals-pre-alg/more-intuition-on-multiplying-decimals/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/decimals-pre-alg/multiplying-decimals-pre-alg/multiplying-decimals/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/decimals/multiplying_decimals/multiplying_decimals_0.5/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/decimals/multiplying-dividing-by-10-decim/dividing-a-decimal-by-a-power-of-10/"

		];
		window.open(exercises[assessment],'_system','location=yes');
	}

	/*Bravo Playlists*/
	if (course == "Bravo" && playlist == 'A') {
		var exercises=["http://192.168.8.200:8008/learn/khan/math/arithmetic/absolute-value/add-sub-negatives/negative-numbers-introduction/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/absolute-value/add-sub-negatives/number_line_2/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/absolute-value/add-sub-negatives/ordering-negative-numbers/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/absolute-value/add-sub-negatives/ordering_negative_numbers/,",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/absolute-value/adding-subtracting-negatives/adding-negative-numbers/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/absolute-value/adding-subtracting-negatives/adding-negative-numbers/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/absolute-value/adding-subtracting-negatives/adding_negative_numbers/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/negatives-absolute-value-pre-alg/add-subtract-negatives-pre-alg/adding_and_subtracting_negative_numbers/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/absolute-value/mult-div-negatives/multiplying-negative-real-numbers/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/absolute-value/mult-div-negatives/multiplying_and_dividing_negative_numbers/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/decimals/decimal-place-value/decimal-place-value/",
						"http://192.168.8.200:8008/learn/khan/math/early-math/cc-early-math-add-sub-100/cc-early-math-add-ones-tens/understanding-place-value-while-adding-tens/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/decimals/significant-figures-tutorial/significant-figures/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/decimals/significant-figures-tutorial/significant_figures_1/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/decimals/decimal-rounding-estimation/rounding_numbers/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/exponents-radicals/scientific-notation/scientific-notation/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/exponents-radicals/scientific-notation/scientific-notation-old/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/exponents-radicals/scienACCtific-notation/scientific_notation/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/exponents-radicals/radical-radicals/understanding-square-roots/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/exponents-radicals/radical-radicals/square_roots/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/exponents-radicals/world-of-exponents/introduction-to-exponents/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/exponents-radicals/world-of-exponents/raising-a-number-to-the-0th-and-1st-power/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/exponents-radicals/world-of-exponents/positive_and_zero_exponents/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/order-of-operations/order-of-operations-ddp/introduction-to-order-of-operations/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/order-of-operations/order-of-operations-ddp/order_of_operations_2/"

		];
		window.open(exercises[assessment],'_system','location=yes');
	}


	else if (course == "Bravo" && playlist == 'B') {
		var exercises=["http://192.168.8.200:8008/learn/khan/math/pre-algebra/rates-and-ratios/ratios-and-proportions/introduction-to-ratios-new-hd-version/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/rates-and-ratios/ratios-and-proportions/ratios-as-fractions-in-simplest-form/",
						"http://192.168.8.200:8008/learn/khan/math/in-sixth-grade-math/ratio-and-proportion/inda-ratio-proportion/ratio_word_problems/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/rates-and-ratios/rates-tutorial/rate_problems_0.5/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/measurement/perimeter/introduction-to-perimeter/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/measurement/perimeter/perimeter-of-a-shape/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/measurement/perimeter/perimeter_1/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/measurement/area-basics/measuring-area-with-unit-squares/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/measurement/area-basics/area_of_squares_and_rectangles/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/measurement/volume-introduction-rectangular/how-we-measure-volume/",
						"http://192.168.8.200:8008/learn/khan/math/in-eighth-grade-math/eighth-mensuration/volume-cube-cuboid-cylinder/measuring-volume-with-unit-cubes/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/measurement/volume-introduction-rectangular/measuring-volume-as-area-times-length/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/measurement/volume-introduction-rectangular/volume-of-a-rectangular-prism-or-box-examples/"
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/measurement/volume-introduction-rectangular/volume_1/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-foundations/alg-foundations-circum-area-circles/circles-radius-diameter-and-circumference/",
						"http://192.168.8.200:8008/learn/khan/math/geometry/basic-geometry/circum-area-circles/find-the-radius-or-diameter-of-a-circle-from-the-circumference-or-area/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-foundations/copy-of-perimeter-area-tutorial/triangle-area-proofs/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-foundations/copy-of-perimeter-area-tutorial/area_of_triangles_1/",
						"http://192.168.8.200:8008/learn/khan/math/basic-geo/basic-geo-volume-surface-area/basic-geo-volumes/cylinder-volume-and-surface-area/",
						"http://192.168.8.200:8008/learn/khan/math/geometry/basic-geometry/volume-tutorial/solid_geometry/",
						"http://192.168.8.200:8008/learn/khan/math/probability/descriptive-statistics/central-tendency/statistics-intro-mean-median-and-mode/",
						"http://192.168.8.200:8008/learn/khan/math/probability/descriptive-statistics/centralaa-tendency/mean-median-and-mode/",
						"http://192.168.8.200:8008/learn/khan/math/probability/descriptive-statistics/central-tendency/mean_median_and_mode/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/algebra-functions/average-rate-of-change-word-problems/average-rate-of-change-word-problems/"
		];
		window.open(exercises[assessment],'_system','location=yes');
	}

	else if (course == "Bravo" && playlist == 'C') {
		var exercises=["http://127.0.0.1:8008/learn/khan/math/basic-geo/basic-geo-angles/basic-geo-angle-basics/naming-angles_1/",
						"http://127.0.0.1:8008/learn/khan/math/basic-geo/basic-geo-angles/basic-geo-angle-basics/measuring_angles/",
						"http://127.0.0.1:8008/learn/khan/math/basic-geo/basic-geo-angles/basic-geo-angle-basics/drawing-angles/",
						"http://127.0.0.1:8008/learn/khan/math/basic-geo/basic-geo-angles/basic-geo-interpreting-angles/angle_types/",
						"http://127.0.0.1:8008/learn/khan/math/basic-geo/basic-geo-angles/basic-geo-interpreting-angles/recognizing-angles/",
						"http://127.0.0.1:8008/learn/khan/math/basic-geo/basic-geo-angles/basic-geo-interpreting-angles/drawing-right--acute--and-obtuse-angles/",
						"http://127.0.0.1:8008/learn/khan/math/basic-geo/basic-geo-angles/basic-geo-interpreting-angles/benchmark-angles/",
						"http://127.0.0.1:8008/learn/khan/math/basic-geo/basic-geo-angles/basic-geo-interpreting-angles/recognizing-parallel-and-perpendicular-lines/",
						"http://127.0.0.1:8008/learn/khan/math/basic-geo/basic-geo-angles/basic-geo-interpreting-angles/decomposing-angles_1/",
						"http://127.0.0.1:8008/learn/khan/math/basic-geo/basic-geo-angles/basic-geo-angle-relationships/complementary_and_supplementary_angles/",
						"http://127.0.0.1:8008/learn/khan/math/basic-geo/basic-geo-angles/basic-geo-angle-relationships/vertical_angles/",
						"http://127.0.0.1:8008/learn/khan/math/basic-geo/basic-geo-angles/basic-geo-angle-relationships/parallel_lines_1/",
						"http://127.0.0.1:8008/learn/khan/math/geometry/parallel-and-perpendicular-lines/complementary-supplementary-angl/complementary_and_supplementary_angles/",
						"http://127.0.0.1:8008/learn/khan/math/geometry/parallel-and-perpendicular-lines/complementary-supplementary-angl/angle_addition_postulate/",
						"http://127.0.0.1:8008/learn/khan/math/geometry/parallel-and-perpendicular-lines/ang-intro/vertical_angles/",
						"http://127.0.0.1:8008/learn/khan/math/geometry/parallel-and-perpendicular-lines/triang-prop-tut/angles_1/",
						"http://127.0.0.1:8008/learn/khan/math/geometry/parallel-and-perpendicular-lines/triang-prop-tut/angles_2/",
						"http://127.0.0.1:8008/learn/khan/math/geometry/parallel-and-perpendicular-lines/angles-with-polygons/angles_of_a_polygon/",
						"http://127.0.0.1:8008/learn/khan/math/algebra-basics/core-algebra-geometry/copy-of-triangle-similarlity/similar-triangle-example-problems/",
						"http://127.0.0.1:8008/learn/khan/math/algebra-basics/core-algebra-geometry/copy-of-triangle-similarlity/similar_triangles_1/",
						"http://127.0.0.1:8008/learn/khan/math/algebra-basics/core-algebra-geometry/copy-of-triangle-similarlity/similarity-example-problems/",
						"http://127.0.0.1:8008/learn/khan/math/algebra-basics/core-algebra-geometry/copy-of-triangle-similarlity/similar_triangles_2/",
						"http://127.0.0.1:8008/learn/khan/math/geometry/similarity/solving-similar-triangles/similarity-example-where-same-side-plays-different-roles/",
						"http://127.0.0.1:8008/learn/khan/math/geometry/congruence/triangle-congruence/finding-congruent-triangles/",
						"http://127.0.0.1:8008/learn/khan/math/geometry/congruence/triangle-congruence/congruent_triangles_1/",
						"http://127.0.0.1:8008/learn/khan/math/geometry/similarity/solving-problems-with-similar-and-congruent-triangles/finding-area-using-similarity-and-congruence/",
						"http://127.0.0.1:8008/learn/khan/math/geometry/congruence/working-with-triangles/congruent_triangles_2/",
						"http://127.0.0.1:8008/learn/khan/math/geometry/congruence/working-with-triangles/figuring-out-all-the-angles-for-congruent-triangles-example/"
		];
		window.open(exercises[assessment],'_system','location=yes');
	}	

	else if (course == "Bravo" && playlist == 'D') {
		var exercises=["http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-expressions/core-algebra-variables-and-expressions/writing-expressions-1/",
						"http://192.168.8.200:8008/learn/khan/math/in-sixth-grade-math/algebra-in/expressions-variables/writing-expressions-2/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-expressions/core-algebra-variables-and-expressions/writing_expressions_1/",
						"http://192.168.8.200:8008/learn/khan/math/in-seventh-grade-math/algebraic-expressions/finding-value-expression/evaluating_expressions_2/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-expressions/core-algebra-manipulating-expressions/combining-like-terms/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-expressions/core-algebra-manipulating-expressions/combining-like-terms-2/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-expressions/core-algebra-manipulating-expressions/combining_like_terms_1/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/order-of-operations/ditributive-property/distributive-property-example-1/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-expressions/core-algebra-variables-and-expressions/evaluating-expressions-with-two-variables/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/applying-math-reasoning-topic/constructing-numeric-expressions/evaluating-an-expression-with-and-without-parentheses/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/introduction-to-algebra/alg1-intro-to-variables/evaluating_expressions_1/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-expressions/core-algebra-variables-and-expressions/evaluating_expressions_2/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-linear-equations-inequalities/core-algebra-solving-basic-equations/solving-one-step-equations-2/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-linear-equations-inequalities/core-algebra-solving-basic-equations/one_step_equations/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/one-variable-linear-equations/old-school-equations/algebra-linear-equations-1/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/one-variable-linear-equations/linear-equations-with-unknown-coefficients/solving_for_a_variable/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-linear-equations-inequalities/core-algebra-linear-inequalities/inequalities-using-multiplication-and-division/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-linear-equations-inequalities/core-algebra-linear-inequalities/one-step-inequalities-2/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-linear-equations-inequalities/core-algebra-linear-inequalities/one_step_inequalities/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-linear-equations-inequalities/core-algebra-linear-inequalities/solving-2-step-inequalities/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-linear-equations-inequalities/core-algebra-linear-inequalities/linear_inequalities/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-graphing-lines-slope/core-algebra-graphing-coordinate-plan/descartes-and-cartesian-coordinates/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-graphing-lines-slope/core-algebra-graphing-coordinate-plan/the-coordinate-plane/",
						"http://192.168.8.200:8008/learn/khan/math/basic-geo/basic-geo-coordinate-plane/copy-of-cc-6th-coordinate-plane/graphing-points-exercise/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-graphing-lines-slope/core-algebra-graphing-coordinate-plan/plot-ordered-pairs/",
						"http://192.168.8.200:8008/learn/khan/math/basic-geo/basic-geo-coordinate-plane/copy-of-cc-6th-coordinate-plane/graphing_points/",
						"http://192.168.8.200:8008/learn/khan/math/basic-geo/basic-geo-coordinate-plane/copy-of-cc-6th-coordinate-plane/identifying_points_1/"
		];
		window.open(exercises[assessment],'_system','location=yes');
	}

	else if (course == "Charlie" && playlist == 'A') {
		var exercises=["http://192.168.8.200:8008/learn/khan/math/arithmetic/fractions/number-sets/number-sets/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/fractions/number-sets/number-sets-2/",
						"http://192.168.8.200:8008/learn/khan/math/arithmetic/fractions/number-sets/number-sets-3/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/exponents-radicals/exponent-properties/exponent_rules/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/exponents-radicals/negative-exponents-tutorial/negative-exponents/",
						"http://192.168.8.200:8008/learn/khan/math/pre-algebra/exponents-radicals/negative-exponents-tutorial/zero-negative-and-fractional-exponents/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-linear-equations-inequalities/core-algebra-linear-equation-word-problems/linear-equation-word-problem-example/"
		];
		window.open(exercises[assessment],'_system','location=yes');
	}

	else if (course == "Charlie" && playlist == 'B') {
		var exercises=["http://192.168.8.200:8008/learn/khan/math/precalculus/precalc-matrices/intro-to-matrices/introduction-to-the-matrix/",
						"http://192.168.8.200:8008/learn/khan/math/precalculus/precalc-matrices/intro-to-matrices/matrix_dimensions/",
						"http://192.168.8.200:8008/learn/khan/math/linear-algebra/matrix-transformations/matrix-transpose/",
						"http://192.168.8.200:8008/learn/khan/math/precalculus/precalc-matrices/multiplying-matrices-by-scalars/scalar-multiplication/",
						"http://192.168.8.200:8008/learn/khan/math/precalculus/precalc-matrices/adding-and-subtracting-matrices/solve-matrix-equations-add-sub/",
						"http://192.168.8.200:8008/learn/khan/math/precalculus/precalc-matrices/properties-of-matrix-multiplication/zero-matrix/",
						"http://192.168.8.200:8008/learn/khan/math/precalculus/precalc-matrices/multiplying-matrices-by-matrices/multiplying_a_matrix_by_a_matrix/",
						"http://192.168.8.200:8008/learn/khan/math/precalculus/precalc-matrices/determinant-of-2x2-matrix/matrix_determinant/",
						"http://192.168.8.200:8008/learn/khan/math/precalculus/precalc-matrices/intro-to-matrix-inverses/inverse-matrix-part-1/",
						"http://192.168.8.200:8008/learn/khan/math/precalculus/precalc-matrices/intro-to-matrix-inverses/determine-inverse-matrices/",
						"http://192.168.8.200:8008/learn/khan/math/precalculus/precalc-matrices/representing-systems-with-matrices/represent-systems-with-matrices/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/sequences/introduction-to-arithmetic-squences/arithmetic-sequences/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/sequences/constructing-arithmetic-sequences/finding-the-100th-term-in-a-sequence/",
						"http://192.168.8.200:8008/learn/khan/math/algebra2/sequences-and-series/copy-of-sequences-review/arithmetic_sequences_1/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/sequences/introduction-to-sequences/recursive-formulas-for-sequences/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/sequences/introduction-to-sequences/evaluating-sequences-in-recursive-form/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/sequences/introduction-to-arithmetic-squences/extending-arithmetic-sequences/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/sequences/constructing-arithmetic-sequences/explicit-formulas-for-arithmetic-sequences/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/sequences/constructing-arithmetic-sequences/explicit-formulas-for-arithmetic-sequences_1/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/sequences/introduction-to-geometric-sequences/geometric-sequences-introduction/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/sequences/introduction-to-geometric-sequences/extending-geometric-sequences/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/sequences/introduction-to-geometric-sequences/geometric_sequences_1/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/sequences/introduction-to-geometric-sequences/geometric_sequences_2/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/sequences/modeling-with-sequences/modeling-situations-with-arithmetic-and-geometric-sequences/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/sequences/modeling-with-sequences/recursive_explicit/",
						"http://192.168.8.200:8008/learn/khan/math/geometry/analytic-geometry-topic/distance-and-midpoints/midpoint-formula/",
						"http://192.168.8.200:8008/learn/khan/math/geometry/analytic-geometry-topic/distance-and-midpoints/midpoint_formula/",
						"http://192.168.8.200:8008/learn/khan/math/basic-geo/basic-geo-pythagorean-topic/basic-geo-pythagorean-theorem/distance-formula/",
						"http://192.168.8.200:8008/learn/khan/math/basic-geo/basic-geo-pythagorean-topic/basic-geo-pythagorean-theorem/distance_formula/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-graphing-lines-slope/core-algebra-slope/graphical-slope-of-a-line/",
						"http://192.168.8.200:8008/learn/khan/math/differential-calculus/taking-derivatives/secant-line-slope-tangent/slope-of-a-line-secant-to-a-curve/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-graphing-lines-slope/core-algebra-equation-of-a-line/equation-of-a-line-hairier-example/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/two-var-linear-equations/forms-of-two-var-linear-equations/writing-the-equation-of-a-line-in-any-form/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/two-var-linear-equations/standard-form/standard-form-for-linear-equations/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-graphing-lines-slope/core-algebra-graphing-slope-intercept/graph-from-slope-intercept-equation/",
						"http://192.168.8.200:8008/learn/khan/math/basic-geo/basic-geo-angles/basic-geo-interpreting-angles/parallel-and-perpendicular-lines-intro/",
						"http://192.168.8.200:8008/learn/khan/math/basic-geo/basic-geo-angles/basic-geo-interpreting-angles/recognizing-parallel-and-perpendicular-lines/"
		];
		window.open(exercises[assessment],'_system','location=yes');
	}

	else if(course == "Charlie" && playlist == 'C'){
		var exercises=[
						"http://192.168.8.200:8008/learn/khan/math/algebra/algebra-functions/intro-to-functions/what-is-a-function/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/algebra-functions/recognizing-functions-ddp/graphical-relations-and-functions/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/algebra-functions/evaluating-functions/functions_1/",
						"http://192.168.8.200:8008/learn/khan/math/algebra2/manipulating-functions/introduction-to-inverses-of-functions/introduction-to-function-inverses/",
						"http://192.168.8.200:8008/learn/khan/math/algebra2/manipulating-functions/introduction-to-inverses-of-functions/understanding-inverse-functions_1/",
						"http://192.168.8.200:8008/learn/khan/math/algebra2/manipulating-functions/funciton-composition/evaluate-composite-functions-from-formulas/",
						"http://192.168.8.200:8008/learn/khan/math/algebra2/manipulating-functions/combining-functions/sum-of-functions/",
						"http://192.168.8.200:8008/learn/khan/math/algebra2/manipulating-functions/combining-functions/difference-of-functions/",
						"http://192.168.8.200:8008/learn/khan/math/algebra2/manipulating-functions/combining-functions/product-of-functions/",
						"http://192.168.8.200:8008/learn/khan/math/algebra2/manipulating-functions/combining-functions/quotient-of-functions/",
						"http://192.168.8.200:8008/learn/khan/math/algebra2/manipulating-functions/invertible-functions/inverse-domain-range/",
						"http://192.168.8.200:8008/learn/khan/math/algebra2/manipulating-functions/finding-inverse-functions/algebraically-finding-inverses/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/quadratics/quadratics-square-root/simple-quadratic-equation/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/quadratics/solving-quadratic-equations-by-factoring/example-1-solving-a-quadratic-equation-by-factoring/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/quadratics/solving-quadratic-equations-by-factoring/solving_quadratics_by_factoring/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/quadratics/solving-quadratics-by-completing-the-square/solving-quadratic-equations-by-completing-the-square/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/quadratics/solving-quadratics-by-completing-the-square/completing_the_square_in_quadratic_expressions/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/quadratics/solving-quadratics-using-the-quadratic-formula/using-the-quadratic-formula/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/quadratics/solving-quadratics-using-the-quadratic-formula/quadratic-formula-1/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/quadratics/solving-quadratics-using-the-quadratic-formula/quadratic_equation/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/quadratics/solving-quadratics-using-the-quadratic-formula/quadratic-formula-3/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/quadratics/solving-quadratics-using-the-quadratic-formula/application-problem-with-quadratic-formula/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-linear-equations-inequalities/ratios-core-algebra/writing-proportions/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-linear-equations-inequalities/ratios-core-algebra/writing_proportions/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-linear-equations-inequalities/ratios-core-algebra/find-an-unknown-in-a-proportion/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-linear-equations-inequalities/ratios-core-algebra/proportions_1/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-linear-equations-inequalities/ratios-core-algebra/proportions-2-exercise-examples/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-linear-equations-inequalities/ratios-core-algebra/proportions_2/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-linear-equations-inequalities/ratios-core-algebra/constructing-proportions-to-solve-application-problems/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-linear-equations-inequalities/ratios-core-algebra/ratio-problem-with-basic-algebra-new-hd/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-linear-equations-inequalities/ratios-core-algebra/constructing-proportions-to-solve-application-problems_1/",
						"http://192.168.8.200:8008/learn/khan/math/trigonometry/trigonometry-right-triangles/intro-to-the-trig-ratios/basic-trigonometry/",
						"http://192.168.8.200:8008/learn/khan/math/trigonometry/trigonometry-right-triangles/intro-to-the-trig-ratios/basic-trigonometry-ii/",
						"http://192.168.8.200:8008/learn/khan/math/trigonometry/trigonometry-right-triangles/intro-to-the-trig-ratios/trigonometry_1/",
						"http://192.168.8.200:8008/learn/khan/math/trigonometry/trigonometry-right-triangles/trig-solve-for-an-angle/solve-for-an-angle-in-a-right-triangle/",
						"http://192.168.8.200:8008/learn/khan/math/trigonometry/trigonometry-right-triangles/modeling-with-right-triangles/angle-to-aim-to-get-alien/",
						"http://192.168.8.200:8008/learn/khan/math/trigonometry/trigonometry-right-triangles/modeling-with-right-triangles/applying-right-triangles/",
						"http://192.168.8.200:8008/learn/khan/math/trigonometry/trigonometry-right-triangles/trig-ratios-similarity/similarity-to-define-sine-cosine-and-tangent/",
						"http://192.168.8.200:8008/learn/khan/math/trigonometry/trigonometry-right-triangles/sine-and-cosine-of-complementary-angles/showing-relationship-between-cosine-and-sine-of-complements/",
						"http://192.168.8.200:8008/learn/khan/math/trigonometry/trigonometry-right-triangles/sine-and-cosine-of-complementary-angles/sine-and-cosine-of-complements-example/",
						"http://192.168.8.200:8008/learn/khan/math/trigonometry/trigonometry-right-triangles/intro-to-the-pythagorean-identity/pythagorean-trig-identity-from-soh-cah-toa/",
						"http://192.168.8.200:8008/learn/khan/math/trigonometry/trigonometry-right-triangles/reciprocal-trig-ratios/example-the-six-trig-ratios/",
						"http://192.168.8.200:8008/learn/khan/math/trigonometry/trigonometry-right-triangles/reciprocal-trig-ratios/reciprocal_trig_funcs/",
						"http://192.168.8.200:8008/learn/khan/math/trigonometry/trig-with-general-triangles/law-of-sines/law-of-sines/"
		];
		window.open(exercises[assessment],'_system','location=yes');
	}

	else if (course == "Charlie" && playlist == 'D') {
		var exercises=[
						"http://192.168.8.200:8008/learn/khan/math/geometry/cc-geometry-circles/circle-basics/language-and-notation-of-the-circle/",
						"http://192.168.8.200:8008/learn/khan/math/geometry/cc-geometry-circles/circles/area-of-a-sector-given-a-central-angle/",
						"http://192.168.8.200:8008/learn/khan/math/geometry/cc-geometry-circles/circles/areas_of_circles_and_sectors/",
						"http://192.168.8.200:8008/learn/khan/math/algebra/linear-word-problems/constructing-linear-models/graphing-linear-functions-word-problems/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-graphing-lines-slope/core-algebra-graphing-linear-inequalities/graphing-inequalities/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-graphing-lines-slope/core-algebra-graphing-linear-inequalities/graphing-linear-inequalities-in-two-variables-example-2/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-graphing-lines-slope/core-algebra-graphing-linear-inequalities/graphs_of_inequalities/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-graphing-lines-slope/core-algebra-graphing-linear-inequalities/graphing_inequalities/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-graphing-lines-slope/core-algebra-graphing-linear-inequalities/graphing_inequalities_2/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-graphing-lines-slope/core-algebra-graphing-linear-inequalities/graphing-inequalities-1/",
						"http://192.168.8.200:8008/learn/khan/math/algebra-basics/core-algebra-graphing-lines-slope/core-algebra-graphing-linear-inequalities/graphs_of_inequalities/",
						"http://192.168.8.200:8008/learn/khan/math/precalculus/vectors-precalc/vector-basic/introduction-to-vectors-and-scalars/",
						"http://192.168.8.200:8008/learn/khan/math/precalculus/vectors-precalc/vector-basic/vector-representations-example/",
						"http://192.168.8.200:8008/learn/khan/math/precalculus/vectors-precalc/magnitude-vectors/magnitude-of-vectors/",
						"http://192.168.8.200:8008/learn/khan/math/precalculus/vectors-precalc/combined-vector-operations/combined-vector-operations/",
						"http://192.168.8.200:8008/learn/khan/math/precalculus/vectors-precalc/unit-vectors/unit-vector-intro/",
						"http://192.168.8.200:8008/learn/khan/math/precalculus/vectors-precalc/adding-vectors-in-magnitude-and-direction-form/mag-dir-vec-sums/",
						"http://192.168.8.200:8008/learn/khan/math/differential-calculus/taking-derivatives/intro-differential-calc/newton-leibniz-and-usain-bolt/",
						"http://192.168.8.200:8008/learn/khan/math/differential-calculus/taking-derivatives/derivative-intro/calculus-derivatives-1-new-hd-version/",
						"http://192.168.8.200:8008/learn/khan/math/differential-calculus/taking-derivatives/power-rule-tutorial/power-rule/",
						"http://192.168.8.200:8008/learn/khan/math/differential-calculus/taking-derivatives/chain-rule/chain-rule-introduction/",
						"http://192.168.8.200:8008/learn/khan/math/differential-calculus/taking-derivatives/taking-derivatives-skill-checks/skill-check--tangent-lines/",
						"http://192.168.8.200:8008/learn/khan/math/differential-calculus/taking-derivatives/power-rule-tutorial/power-rule-basic/",
						"http://192.168.8.200:8008/learn/khan/math/differential-calculus/taking-derivatives/chain-rule/chain_rule_1/",
						"http://192.168.8.200:8008/learn/khan/math/differential-calculus/taking-derivatives/product-rule/applying-the-product-rule-for-derivatives/",
						"http://192.168.8.200:8008/learn/khan/math/differential-calculus/taking-derivatives/product-rule/product_rule/",
						"http://192.168.8.200:8008/learn/khan/math/differential-calculus/taking-derivatives/product-rule/quotient-rule-from-product-rule/",
						"http://192.168.8.200:8008/learn/khan/math/differential-calculus/taking-derivatives/product-rule/quotient-rule-for-derivative-of-tan-x/",
						"http://192.168.8.200:8008/learn/khan/math/differential-calculus/taking-derivatives/product-rule/quotient_rule/",
						"http://192.168.8.200:8008/learn/khan/math/differential-calculus/taking-derivatives/der-common-functions/proof-d-dx-ln-x-1-x/",
						"http://192.168.8.200:8008/learn/khan/math/differential-calculus/taking-derivatives/derivatives-inverse-functions/derivative-inverse-sine/",
						"http://192.168.8.200:8008/learn/khan/math/differential-calculus/taking-derivatives/derivatives-inverse-functions/derivative-natural-logarithm/",
						"http://192.168.8.200:8008/learn/khan/math/differential-calculus/taking-derivatives/derivatives-inverse-functions/derivatives-of-inverse-functions/"
		];
		window.open(exercises[assessment],'_system','location=yes');
		
	}

};