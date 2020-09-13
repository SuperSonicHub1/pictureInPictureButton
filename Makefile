# https://shoehornwithteeth.com/ramblings/2016/05/using-make-to-generate-chrome-extension-icons/
iconsrc := icons/src/baseline_picture_in_picture_alt_black_48dp.png
icondir := icons
iconsizes := {16,19,38,48,128,256}
iconfiles := $(shell echo $(icondir)/icon-$(iconsizes).png)

$(icondir)/icon-%.png:
	@mkdir -p $(@D)
	convert $(iconsrc) -resize $* $@

icons: $(iconfiles)

.PHONY: icons