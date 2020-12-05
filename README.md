Partner Center Edge extension linting bug
=========================================

This repo contains an extension that demonstrates a bug with [Partner Center](https://partner.microsoft.com/en-gb/dashboard) that causes some valid extensions to be rejected.

Google documents the [method for searching for messages](https://developer.chrome.com/extensions/i18n#locales-usage), which covers when a message is not present in the current locale.

Edge itself implements this method of looking up messages, but Partner Center appears to have linting code that doesn't support it.

The extension in this repo works fine in Edge (tested in the `en_GB` and `en_US`locales on macOS Catalina 10.15.7 with Edge 87) but Partner Center rejects the ZIP file with the following error and warning.

> The following checks failed:
>
> * Package acceptance validation error: The translation of the name of your item is missing in locale en_US.
>
> Warnings:
>
> * Package acceptance validation warning: String \_\_MSG\_extensionShortName\_\_ exceeds maximum length of 12. Code: short\_name: \_\_MSG\_extensionShortName\_\_ Line: 7 Column: 44

It seems that Partner Center's linting code needs to be updated to match the behaviour implemented in Edge.

The bug was introduced after the 12th of February 2020, when I successfully uploaded version 2.7.0 of the [Landmarks extension](https://microsoftedge.microsoft.com/addons/detail/oemdnnhhfhdhilalibobndhoahcaiboe), which uses this pattern. I am working on a workaround for future versions of the Landmarks extension.

Demo extension
--------------

This extension adds a browser action button that injects a paragraph at the top of the page that contains a localised word. It is localised for `en_GB` and `en_US`.

The `update-zip.sh` script (tested on macOS Catalina) updates the ZIP file with the latest contents of the `extension/` directory.

To test
-------

* Try loading the `extension/` directory into Edge to try it out.
* Try uploading [demo-extension.zip](demo-extension.zip) to Partner Center.
* You could check it with Mozilla's [addons-linter](https://github.com/mozilla/addons-linter) (version 2.13.1 reports no errors, warnings nor notices).
