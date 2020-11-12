# Pullscription.com


Here is a fully working (but not complete) backend/frontend for pullscription.com! 

Here are instructions how to set it up:

###USING OUR ALREADY-CONFIGURED REMOTE HOST

#####First, let's start the django backend

Open a terminal. Type the following commands in this order:

`ssh vineetasingh@173.255.241.100`

password: redacted

```
cd backend

source env/bin/activate
```

You should see (env) to the left of your username. With ~/backend/ as your working directory, type:

`python manage.py runserver 0.0.0.0:8000`

This starts the django test server listening over any interface.

#####Now, the front end!

Open a new terminal. Log in again:

`ssh vineetasingh@173.255.241.100`

password: apple

```
cd /var/www/html/pullscription.com/react-source/

npm start
```

Leave both windows open, and navigate your browser to [173.255.241.100:3000](http://173.255.241.100:3000). Enjoy.


###TO SET UP ON A PERSONAL SERVER, AT HOME

Download the react source and place it in the appropriate directory. We will assume you have npm installed already.

Because the comic book information is on the server, you **MUST** follow the steps above to get the django backend running on the remote server. All links in the react project are absolute, so there should be few broken links (that aren't broken already.)

one you have moved the directory to where you'd like it, open a terminal, navigate to the react-source directory, and run `npm start`. Visit [localhost:3000](http://localhost:30000). Enjoy!


