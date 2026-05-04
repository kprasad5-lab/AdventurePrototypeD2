A simple adventure game by {who?} based on a simple adventure game engine by [Adam Smith](https://github.com/rndmcnlly).

Code requirements:
- **4+ scenes based on `AdventureScene`**:
    - Room1
    - Room1Return
    - Room2
    - Room3
    (These will be renamed)
- **2+ scenes *not* based on `AdventureScene`**: unsatisfied (name the classes).
- **2+ methods or other enhancement added to the adventure game engine to simplify my scenes**:
    - showInventory(): Is called on new scenes and when items are picked up. Destroys array inventoryImgs[], iterates over inventory[], and displays/pushes items in a hotbar-style inventory
    - showMap(): A special function to handle interactions with inventory item if it is the map. Includes tween that zooms the map in/out.

Experience requirements:
- **4+ locations in the game world**: 
    - Portal room
    - Waterfall/Entrance scene
    - Underwater scene
    - Forest scene

- **2+ interactive objects in most scenes**:
    - Mushrooms can be picked up and display different text when hovered over before and after being picked up.
    - Interactive map has custom zoom in/out tween

- **Many objects have `pointerover` messages**: 
    - The moon is significant to the game and has a hover message.
    - All interactive items, like mushrooms and arrows, have hover messages.

- **Many objects have `pointerdown` effects**: unsatisfied (describe two examples)
    - On click, depnding on if mapIsZoomed is true or false, the map zooms in or out
    - Mushrooms are picked up on click
    - Arrows switch scenes when clicked

- **Some objects are themselves animated**:
    - Items that are picked up fade off the screen
    - Map

Asset sources:
- (For each image/audio/video asset used, describe how it was created. What tool did you use to create it? Was it based on another work? If so, how did you change it, and where can we learn more about the original work for comparison? Use [Markdown link syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#links).)

- Labyrinth.ttf: Downloaded from Dafont.com; created by BlackFridayFont FMF:
    - https://www.dafont.com/le-labyrinthe-des-chevaliers.font

- As for now, all other assets are created by me. They are drawn in Sketchbook on a Samsung tablet with Spen. The map uses this image as a texture overlay:
    - https://www.dreamstime.com/royalty-free-stock-photos-old-paper-texture-image16209018
Code sources:
- `adventure.js` and `index.html` were created for this project [Adam Smith](https://github.com/rndmcnlly) and edited by me.
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly) and rewritten by me.