#  Simple chrome extension allowing youtube videos to be rotated upside down.

You can either click on the extension icon next to the address bar,
or use the shortcut key (by default Ctrl-Y)


## Why

I use this when watching piano players who have filmed themself from the front
instead of from the side or back. Then I don't have to mirror their hand
positions in my head.


## How to install

This is not in the app store, so some help to "LOAD UNPACKED" extensions
can be found here:
https://developer.chrome.com/extensions/getstarted


## Details

In the options page for the extension, you have the choice between two
different html elements to rotate.


The default option 'html5-video-player' rotates both the video and the user
interface (but stays rotated during and after commercials).

Unfortunately, the user interface is semi-broken when using that setting
(if you want to skip around in the video), and I have no intention to fix that
since it's likely to break with most updates youtube makes to their page.


The other element option 'video-stream' will loose its rotation every time youtube switches to a
commercial and back, but is not rotating the user interface, and don't have
any usability issues.


It's super easy to switch back and forth with this extensions shortcut
key, so I don't consider using either option a problem.
