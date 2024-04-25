---
id: velocity-proxy
title: Velocity Proxy
sidebar_position: 1
---

# Protecting your server with a proxy

If you're hosting a Minecraft server at home, chances are you don't want to expose your home IP. One way to hide it is through a proxy. Setting one up can be a bit tricky though, so if you don't want to do that, I've included some [alternatives](#alternatives), too.

### How it works

Broadly, a proxy forwards traffic between two or more computers. In this case, the proxy is a server that will live on a VPS outside of your network and forward traffic between the Minecraft server and the clients. Only the proxy knows where the server is, which is how it hides your IP address. Clients connect to the proxy, which then forwards the data on to the server, optionally through a VPN for extra security.

### What you'll need

- A Spigot/Paper or Fabric server running somewhere in your network
- A domain name (optional, but strongly recommended)
- A cloud server (VPS)
- A bit of Linux command-line knowledge

## Main steps

### Step 1: Getting a server

I use [Linode](https://www.linode.com/), but you can get a VPS from anywhere. A Velocity proxy is super lightweight, so the server doesn't need much power. 1 vCPU and a gigabyte of RAM should work fine. Here are detailed steps for Linode:

1. Sign up for Linode. There are referral codes that can get you $100 free trial credit for 60 days, but I don't have one here.
2. Click the "Create Linode" button to create a server.
3. Create a server with the following settings:
   - **Image:** Debian 12
   - **Region:** Any region close to you (a location central to your users is a good choice)
   - **Linode Plan:** First choose "Shared CPU," then "Nanode 1 GB"
   - **Details:** Name it whatever you want. You don't need any tags
   - **Root Password:** Set a strong password here. Don't forget it!
4. Click "Create Linode"

### Step 2: Preparing the server

Now that you have your server, it's time to set it up.

#### Step 2.1

SSH into your server.

### Step 3: Setting up Velocity

### Step 4: Connecting your server

### Step 5: Connecting a domain

## Optional steps: VPN tunneling (Recommended)

To add more security to your setup, you can encrypt the backend connection between your proxy and Minecraft server. This helps prevent people from trying to connect directly to the server without going through the proxy. This isn't a huge deal, since Velocity uses a secret to only allow proxy traffic, but it's good practice.

### Optional Step 1:

## Alternatives

If you don't want to host your own proxy, here are some alternatives you can try:

- [playit.gg](https://playit.gg) is a simple, user-friendly proxy service that can hide your IP. There's a free tier, but you can pay $3/mo to get features like the ability to use your own domain.
- [zrok](https://zrok.io/) is an open-source tunneling service. It's more complicated to set up than playit.gg, but it might be easier than setting up your own proxy.
- [Tailscale](https://tailscale.com/) is another tunneling service, but unlike zrok, it's not open-source. It's widely used, however, so support should be good.

*Please note that we are not responsible for any of the above websites*