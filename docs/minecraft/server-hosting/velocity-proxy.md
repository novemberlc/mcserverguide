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

#### Step 2.1: Adding a new user

Now that you have your server, it's time to set it up. SSH into your server using your root password.

```
ssh root@<yourip>
```
Now, let's create a new user.

```
adduser <username>
```
Enter a password for the new user and press enter. You can leave the next fields blank. Just press enter for each one. Once that finishes, we need to give the user sudo permissions.

```
usermod -aG sudo <username>
```
Now log out by typing `exit`. Log back in the same way you did before. Now, let's test if the new user is part of the sudo group. Switch to your new user.

```
su <username>
```

And we'll check if sudo works.

```
sudo whoami
```

If you get a response saying "root," you're good to go! Now we'll secure the server.

#### Step 2.2: Restricting SSH access

Now that you have a new user, let's secure the server by preventing the root user from logging in. First, switch back to your root user by typing `exit`. Then, edit the SSH server config file.

```
nano /etc/ssh/sshd_config
```

Find the line that says `#PermitRootLogin yes`. Uncomment the line by deleting the `#` and change it to say `PermitRootLogin no`. Save and exit ('Ctrl+X' then 'y' then 'enter'), then restart the service.

```
systemctl restart sshd
```

Now log out and SSH in as your new user.

### Step 3: Setting up Velocity

Assuming you're logged into your non-root user, let's go to its home directory, make a new directory within it, and then enter it.

```
cd ~
mkdir proxy
cd proxy
```
You'll need Java for the proxy to work.

```
sudo apt-get update
sudo apt install openjdk-17-jdk
```

Press Y and enter when prompted. Once that finishes, check that the installation worked.

```
java -v
```
If you get an output listing the installed version, your Java installed correctly. Now we need to download the Velocity proxy. Go to https://papermc.io/downloads/velocity, right click the big blue button, and copy the link address. That's the jar file we need to run the server. Download it to your proxy server using wget.

```
wget <url>
```
When that completes, you should see the file when you list the contents of the directory using `ls`. Take note of the file name. Now, we'll run the proxy!

```
java -Xms1G -Xmx1G -jar <velocity-filename.jar>
```

The proxy is running! There's a problem, though. If you leave this console, the proxy will stop. We can solve this problem using a tool called "screen." Let's install it.

```
sudo apt install screen
```
Press Y and enter when prompted. We'll use screen to keep the proxy open in what's called a "screen session." First, create a session.

```
screen -S proxy
```

This creates a screen session and brings you into it. This is where we'll run the proxy. Make sure you're in the correct directory, then run the same command as before.

```
java -Xms1G -Xmx1G -jar <velocity-filename.jar>
```

The proxy is now running inside a screen session. To leave the session, type 'Ctrl+a', then type 'd'. This will detach you from the screen session and put you back where you were. The proxy is still running in the background. Now we have to connect the proxy to your server.

### Step 4: Connecting Velocity to your Minecraft server

Wahoo

### Step 5: Connecting a domain

There are two methods you can use to point a domain to your proxy. In most cases, you can just use an A record, since the proxy should be running on port 25565, the default minecraft port. If it's not, though, you can use an SRV record.

#### Using an A record

Go to wherever you manage your DNS records and add an A record for a subdomain that points to your proxy's IP address. It's that simple.

#### Using an SRV record

Using an SRV record is a bit more complicated, and you should only need it if your proxy isn't accepting connections on port 25565. If that's the case, you probably know how to set it up, but here's an overview:

1. Create an A record that points to the proxy.
2. Create an SRV record that targets the address you set up with the A record. The name of the SRV record should be something like `_minecraft._tcp.<subdomain>`. The port will be the port your proxy is accepting connections on.

## Optional steps: VPN tunneling (Recommended)

To add more security to your setup, you can encrypt the backend connection between your proxy and Minecraft server. This helps prevent people from trying to connect directly to the server without going through the proxy. This isn't a huge deal, since Velocity uses a secret to only allow proxy traffic, but it's good practice.

### Optional Step 1:

## Alternatives

If you don't want to host your own proxy, here are some alternatives you can try:

- [playit.gg](https://playit.gg) is a simple, user-friendly proxy service that can hide your IP. There's a free tier, but you can pay $3/mo to get features like the ability to use your own domain.
- [zrok](https://zrok.io/) is an open-source tunneling service. It's more complicated to set up than playit.gg, but it might be easier than setting up your own proxy.
- [Tailscale](https://tailscale.com/) is another tunneling service, but unlike zrok, it's not open-source. It's widely used, however, so support should be good.

*Please note that we are not responsible for any of the above websites*