from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route("/index")
@app.route("/home")
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/news")
def news():
    return render_template("news.html")

@app.route("/operator")
def operator():
    return render_template("operator.html")

@app.route("/wiemanspielt")
def wiemanspielt():
    return render_template("wiemanspielt.html")

@app.route("/collectables")
def collectables():
    return render_template("collectables.html")

@app.route("/spielmodi")
def spielmodi():
    return render_template("spielmodi.html")

@app.route("/maps")
def maps():
    return render_template("maps.html")

@app.route("/datenschutz")
def datenschutz():
    return render_template("datenschutz.html")

@app.route("/impressum")
def impressum():
    return render_template("impressum.html")

#@app.route("/{name}")
#def some(name):
#    if name.endswith(".html"):
#        return render_template(name)
#    else:
#        return render_template(name)

if __name__ == '__main__':
    app.run(debug=False)