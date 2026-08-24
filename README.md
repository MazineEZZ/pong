# PONG

## Overview

Pong is a **2D game** of which two players control a paddle each and try to score on each other. It was made for [The 20 Games Challenge](https://20_games_challenge.gitlab.io/). Here's a [live preview](https://mazineezz.github.io/pong/).

## Tech stack

- **Vanilla JS**
- **CSS**
- **HTML**
  Note: No game engine was used. All game logic, and physics were implemented entirely by me.

## What I learned?

During this project, I had to learn new concepts (or even come up with my own), implement them, and make them work. Here's a quick summary:

- **Collisions**: Implementing a simple _AABB_ to check if two objects are overlapping each other.
- **Ball bounce**: I came up with a simple solution to the ball bounce by setting a range to the paddle and depending on where the ball hit I calculate an angle and move the ball towards a _vector_.
- **Game loop**: Implemented a simple game loop mechanic for my game of which I utilized the `requestAnimationFrame(callback)` to run a function on each frame.
- **Canvas & Drawing mechanics**: I learned about the `canvas` HTML element and utilized it to draw entities.

## What I liked?

I really enjoyed the creation of this project, especially when I struggled at **3am** to come up with a collision system entirely by my own, using no tutorial or AI help. Those moments were really special. And unfortunately, a game engine just steals those moments of joy. However, I noticed that even though **Pong** is a fairly simple game, it took me a _massive amount of time_, _a lot of headaches_, and giving up moments just to make it, so I understand how game engines can be of great help.

## What's coming next?

With that being said, the next one or two games in the gaming challenge are still going to be made using **Vanilla JS**, and maybe after that I'll be a little more comfortable with game dev and creation to start making games in **Godot** confidentely, and without relying on tutorials.

## Sources

- [Bfxr](https://www.bfxr.net/): I used this site to create SFX
