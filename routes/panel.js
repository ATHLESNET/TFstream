//define libraries
const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

const express = require("express");
const router = express.Router();

const WebSocket = require("ws");
const e = require("express");
const client = new WebSocket("ws://192.168.1.75:8880");

const OBSWebSocket = require("obs-websocket-js").default;
const obs = new OBSWebSocket();

//render page
router.get("/", (req, res) => {
  res.render("panel", {});
});

//recive code from frontpage
client.on("message", (message) => {
  let jsonIn = JSON.parse(message);

  if (jsonIn.command == "startlist") {
    console.log("SI");
    let filePath = path.join(__dirname, "../database/track.json");

    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      try {
        let id = jsonIn.event + "-" + jsonIn.round + "-" + jsonIn.serie;
        console.log(id);

        let jsonTrack = JSON.parse(data);

        let race = jsonTrack.find((race) => race.id === id);

        let title = race.title;
        let participants = race.participants;

        let jsonData = {
          command: "startlistComponents",
          title: title,
          serie: jsonIn.serie,
          round: jsonIn.round,

          nameOne: participants[0]?.name ?? "",
          nameTwo: participants[1]?.name ?? "",
          nameThree: participants[2]?.name ?? "",
          nameFour: participants[3]?.name ?? "",
          nameFive: participants[4]?.name ?? "",
          nameSix: participants[5]?.name ?? "",
          nameSeven: participants[6]?.name ?? "",
          nameEight: participants[7]?.name ?? "",

          clubOne: participants[0]?.club ?? "",
          clubTwo: participants[1]?.club ?? "",
          clubThree: participants[2]?.club ?? "",
          clubFour: participants[3]?.club ?? "",
          clubFive: participants[4]?.club ?? "",
          clubSix: participants[5]?.club ?? "",
          clubSeven: participants[6]?.club ?? "",
          clubEight: participants[7]?.club ?? "",
        };

        let jsonSEND = JSON.stringify(jsonData);
        client.send(jsonSEND);

        obs.connect("ws://192.168.1.75:4444").then(() => {
          obs.call("SetSceneItemEnabled", {
            sceneName: "LIVE",
            sceneItemId: 8,
            sceneItemEnabled: true,
          });
          obs.call("SetSceneItemEnabled", {
            sceneName: "LIVE",
            sceneItemId: 4,
            sceneItemEnabled: true,
          });

          setTimeout(() => {
            obs.call("SetSceneItemEnabled", {
              sceneName: "LIVE",
              sceneItemId: 3,
              sceneItemEnabled: true,
            });
          }, 2000);
          setTimeout(() => {
            obs.call("SetSceneItemEnabled", {
              sceneName: "LIVE",
              sceneItemId: 11,
              sceneItemEnabled: true,
            });
          }, 2000);
          if (participants[1]?.name != undefined) {
            setTimeout(() => {
              obs.call("SetSceneItemEnabled", {
                sceneName: "LIVE",
                sceneItemId: 12,
                sceneItemEnabled: true,
              });
            }, 2200);
          }
          if (participants[2]?.name != undefined) {
            setTimeout(() => {
              obs.call("SetSceneItemEnabled", {
                sceneName: "LIVE",
                sceneItemId: 13,
                sceneItemEnabled: true,
              });
            }, 2400);
          }
          if (participants[3]?.name != undefined) {
            setTimeout(() => {
              obs.call("SetSceneItemEnabled", {
                sceneName: "LIVE",
                sceneItemId: 14,
                sceneItemEnabled: true,
              });
            }, 2600);
          }
          if (participants[4]?.name != undefined) {
            setTimeout(() => {
              obs.call("SetSceneItemEnabled", {
                sceneName: "LIVE",
                sceneItemId: 15,
                sceneItemEnabled: true,
              });
            }, 2800);
          }
          if (participants[5]?.name != undefined) {
            setTimeout(() => {
              obs.call("SetSceneItemEnabled", {
                sceneName: "LIVE",
                sceneItemId: 16,
                sceneItemEnabled: true,
              });
            }, 3000);
          }
          if (participants[6]?.name != undefined) {
            setTimeout(() => {
              obs.call("SetSceneItemEnabled", {
                sceneName: "LIVE",
                sceneItemId: 25,
                sceneItemEnabled: true,
              });
            }, 3200);
          }
          if (participants[7]?.name != undefined) {
            setTimeout(() => {
              obs.call("SetSceneItemEnabled", {
                sceneName: "LIVE",
                sceneItemId: 26,
                sceneItemEnabled: true,
              });
            }, 3400);
          }
          /*if (participants[7]?.name != undefined) {
            setTimeout(() => {
              obs.call("SetSceneItemEnabled", {
                sceneName: "LIVE",
                sceneItemId: 10,
                sceneItemEnabled: true,
              });
            }, 3600);
          }*/
          /*setTimeout(() => {
            obs.call("SetSceneItemEnabled", {
              sceneName: "LIVE",
              sceneItemId: 5,
              sceneItemEnabled: true,
            });
          }, 3800);*/

          setTimeout(() => {
            obs.call("SetSceneItemEnabled", {
              sceneName: "LIVE",
              sceneItemId: 3,
              sceneItemEnabled: false,
            });
          }, 16600);
          setTimeout(() => {
            obs.call("SetSceneItemEnabled", {
              sceneName: "LIVE",
              sceneItemId: 8,
              sceneItemEnabled: false,
            });
          }, 16600);
          setTimeout(() => {
            obs.call("SetSceneItemEnabled", {
              sceneName: "LIVE",
              sceneItemId: 4,
              sceneItemEnabled: false,
            });
          }, 16600);
          setTimeout(() => {
            obs.call("SetSceneItemEnabled", {
              sceneName: "LIVE",
              sceneItemId: 10,
              sceneItemEnabled: false,
            });
          }, 16600);
          setTimeout(() => {
            obs.call("SetSceneItemEnabled", {
              sceneName: "LIVE",
              sceneItemId: 5,
              sceneItemEnabled: false,
            });
          }, 16600);
          setTimeout(() => {
            obs.call("SetSceneItemEnabled", {
              sceneName: "LIVE",
              sceneItemId: 11,
              sceneItemEnabled: false,
            });
          }, 16800);
          setTimeout(() => {
            obs.call("SetSceneItemEnabled", {
              sceneName: "LIVE",
              sceneItemId: 12,
              sceneItemEnabled: false,
            });
          }, 17000);
          setTimeout(() => {
            obs.call("SetSceneItemEnabled", {
              sceneName: "LIVE",
              sceneItemId: 13,
              sceneItemEnabled: false,
            });
          }, 17200);
          setTimeout(() => {
            obs.call("SetSceneItemEnabled", {
              sceneName: "LIVE",
              sceneItemId: 14,
              sceneItemEnabled: false,
            });
          }, 17400);
          setTimeout(() => {
            obs.call("SetSceneItemEnabled", {
              sceneName: "LIVE",
              sceneItemId: 15,
              sceneItemEnabled: false,
            });
          }, 17600);
          setTimeout(() => {
            obs.call("SetSceneItemEnabled", {
              sceneName: "LIVE",
              sceneItemId: 16,
              sceneItemEnabled: false,
            });
          }, 17800);
          setTimeout(() => {
            obs.call("SetSceneItemEnabled", {
              sceneName: "LIVE",
              sceneItemId: 25,
              sceneItemEnabled: false,
            });
          }, 18000);
          setTimeout(() => {
            obs.call("SetSceneItemEnabled", {
              sceneName: "LIVE",
              sceneItemId: 26,
              sceneItemEnabled: false,
            });
          }, 18200);
        });
      } catch (parseError) {
        console.error(parseError);
      }
    });
  } else if (jsonIn.command == "results") {
    let lifCode =
      jsonIn.event + "-" + jsonIn.round + "-" + jsonIn.serie + ".lif";
    let filePath = path.join(
      "/Users/thecasalegno/Documents/CRONO-files",
      lifCode
    );

    let results = [];

    if (fs.existsSync(filePath)) {
      fs.createReadStream(filePath)
        .pipe(
          csv({
            headers: false,
          })
        )
        .on("data", (data) => results.push(data))
        .on("end", () => {
          let jsonDATA = {
            command: "resultsComponents",
            title: results[0]["3"],
            wind: results[0]["4"],
            serie: jsonIn.serie,
            round: jsonIn.round,

            nameOne:
              (results[1]?.["3"] || "") +
              " " +
              (results[1]?.["4"].charAt(0) || "") +
              ("." || ""),
            nameTwo:
              (results[2]?.["3"] || "") +
              " " +
              (results[2]?.["4"]?.charAt(0) || "") +
              ("." || ""),
            nameThree:
              (results[3]?.["3"] || "") +
              " " +
              (results[3]?.["4"]?.charAt(0) || "") +
              ("." || ""),
            nameFour:
              (results[4]?.["3"] || "") +
              " " +
              (results[4]?.["4"]?.charAt(0) || "") +
              ("." || ""),
            nameFive:
              (results[5]?.["3"] || "") +
              " " +
              (results[5]?.["4"]?.charAt(0) || "") +
              ("." || ""),
            nameSix:
              (results[6]?.["3"] || "") +
              " " +
              (results[6]?.["4"]?.charAt(0) || "") +
              ("." || ""),
            nameSeven:
              (results[7]?.["3"] || "") +
              " " +
              (results[7]?.["4"]?.charAt(0) || "") +
              ("." || ""),
            nameEight:
              (results[8]?.["3"] || "") +
              " " +
              (results[8]?.["4"]?.charAt(0) || "") +
              ("." || ""),

            clubOne: results[1]?.["5"] || "",
            clubTwo: results[2]?.["5"] || "",
            clubThree: results[3]?.["5"] || "",
            clubFour: results[4]?.["5"] || "",
            clubFive: results[5]?.["5"] || "",
            clubSix: results[6]?.["5"] || "",
            clubSeven: results[7]?.["5"] || "",
            clubEight: results[8]?.["5"] || "",

            markOne: results[1]?.["6"] || "",
            markTwo: results[2]?.["6"] || "",
            markThree: results[3]?.["6"] || "",
            markFour: results[4]?.["6"] || "",
            markFive: results[5]?.["6"] || "",
            markSix: results[6]?.["6"] || "",
            markSeven: results[7]?.["6"] || "",
            markEight: results[8]?.["6"] || "",
          };

          let jsonSEND = JSON.stringify(jsonDATA);
          client.send(jsonSEND);

          obs.connect("ws://192.168.1.75:4444").then(() => {
            obs.call("SetSceneItemEnabled", {
              sceneName: "LIVE",
              sceneItemId: 8,
              sceneItemEnabled: true,
            });
            obs.call("SetSceneItemEnabled", {
              sceneName: "LIVE",
              sceneItemId: 4,
              sceneItemEnabled: true,
            });

            setTimeout(() => {
              obs.call("SetSceneItemEnabled", {
                sceneName: "LIVE",
                sceneItemId: 3,
                sceneItemEnabled: true,
              });
            }, 2000);
            setTimeout(() => {
              obs.call("SetSceneItemEnabled", {
                sceneName: "LIVE",
                sceneItemId: 11,
                sceneItemEnabled: true,
              });
            }, 2000);
            if (results[2]?.["6"] != undefined) {
              setTimeout(() => {
                obs.call("SetSceneItemEnabled", {
                  sceneName: "LIVE",
                  sceneItemId: 12,
                  sceneItemEnabled: true,
                });
              }, 2200);
            }
            if (results[3]?.["6"] != undefined) {
              setTimeout(() => {
                obs.call("SetSceneItemEnabled", {
                  sceneName: "LIVE",
                  sceneItemId: 13,
                  sceneItemEnabled: true,
                });
              }, 2400);
            }
            if (results[4]?.["6"] != undefined) {
              setTimeout(() => {
                obs.call("SetSceneItemEnabled", {
                  sceneName: "LIVE",
                  sceneItemId: 14,
                  sceneItemEnabled: true,
                });
              }, 2600);
            }
            if (results[5]?.["6"] != undefined) {
              setTimeout(() => {
                obs.call("SetSceneItemEnabled", {
                  sceneName: "LIVE",
                  sceneItemId: 15,
                  sceneItemEnabled: true,
                });
              }, 2800);
            }
            if (results[6]?.["6"] != undefined) {
              setTimeout(() => {
                obs.call("SetSceneItemEnabled", {
                  sceneName: "LIVE",
                  sceneItemId: 16,
                  sceneItemEnabled: true,
                });
              }, 3000);
            }
            if (results[7]?.["6"] != undefined) {
              setTimeout(() => {
                obs.call("SetSceneItemEnabled", {
                  sceneName: "LIVE",
                  sceneItemId: 25,
                  sceneItemEnabled: true,
                });
              }, 3200);
            }
            if (results[8]?.["6"] != undefined) {
              setTimeout(() => {
                obs.call("SetSceneItemEnabled", {
                  sceneName: "LIVE",
                  sceneItemId: 26,
                  sceneItemEnabled: true,
                });
              }, 3400);
            }
            if (results[2]?.["6"] != undefined) {
              setTimeout(() => {
                obs.call("SetSceneItemEnabled", {
                  sceneName: "LIVE",
                  sceneItemId: 10,
                  sceneItemEnabled: true,
                });
              }, 3600);
            }
            setTimeout(() => {
              obs.call("SetSceneItemEnabled", {
                sceneName: "LIVE",
                sceneItemId: 5,
                sceneItemEnabled: true,
              });
            }, 3800);

            setTimeout(() => {
              obs.call("SetSceneItemEnabled", {
                sceneName: "LIVE",
                sceneItemId: 3,
                sceneItemEnabled: false,
              });
            }, 16600);
            setTimeout(() => {
              obs.call("SetSceneItemEnabled", {
                sceneName: "LIVE",
                sceneItemId: 8,
                sceneItemEnabled: false,
              });
            }, 16600);
            setTimeout(() => {
              obs.call("SetSceneItemEnabled", {
                sceneName: "LIVE",
                sceneItemId: 4,
                sceneItemEnabled: false,
              });
            }, 16600);
            setTimeout(() => {
              obs.call("SetSceneItemEnabled", {
                sceneName: "LIVE",
                sceneItemId: 10,
                sceneItemEnabled: false,
              });
            }, 16600);
            setTimeout(() => {
              obs.call("SetSceneItemEnabled", {
                sceneName: "LIVE",
                sceneItemId: 5,
                sceneItemEnabled: false,
              });
            }, 16600);
            setTimeout(() => {
              obs.call("SetSceneItemEnabled", {
                sceneName: "LIVE",
                sceneItemId: 11,
                sceneItemEnabled: false,
              });
            }, 16800);
            setTimeout(() => {
              obs.call("SetSceneItemEnabled", {
                sceneName: "LIVE",
                sceneItemId: 12,
                sceneItemEnabled: false,
              });
            }, 17000);
            setTimeout(() => {
              obs.call("SetSceneItemEnabled", {
                sceneName: "LIVE",
                sceneItemId: 13,
                sceneItemEnabled: false,
              });
            }, 17200);
            setTimeout(() => {
              obs.call("SetSceneItemEnabled", {
                sceneName: "LIVE",
                sceneItemId: 14,
                sceneItemEnabled: false,
              });
            }, 17400);
            setTimeout(() => {
              obs.call("SetSceneItemEnabled", {
                sceneName: "LIVE",
                sceneItemId: 15,
                sceneItemEnabled: false,
              });
            }, 17600);
            setTimeout(() => {
              obs.call("SetSceneItemEnabled", {
                sceneName: "LIVE",
                sceneItemId: 16,
                sceneItemEnabled: false,
              });
            }, 17800);
            setTimeout(() => {
              obs.call("SetSceneItemEnabled", {
                sceneName: "LIVE",
                sceneItemId: 25,
                sceneItemEnabled: false,
              });
            }, 18000);
            setTimeout(() => {
              obs.call("SetSceneItemEnabled", {
                sceneName: "LIVE",
                sceneItemId: 26,
                sceneItemEnabled: false,
              });
            }, 18200);
          });

          /*.then(() => obs.call("GetSceneItemList", { sceneName: "LIVE" }))
          .then((data) => {
            console.log(data);
          });*/
        })
        .on("error", (err) => {
          console.error("Errore nella lettura del file:", err);
        });
    } else {
      let jsonData = {
        command: "error",
        error: "lif",
      };

      let jsonSEND = JSON.stringify(jsonData);
      client.send(jsonSEND);
    }
  } else if (jsonIn.command == "sendLJ") {
    let filePath = path.join(__dirname, "../database/LJ.json");

    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      try {
        let bib = jsonIn.bib;
        let res = jsonIn.res;
        let nextBib = jsonIn.nextBib;
        let wind = jsonIn.wind;

        let jsonLJ = JSON.parse(data);
        let nextParticipant = jsonLJ.LJ.find(
          (nextParticipant) => nextParticipant.bib === nextBib
        );
        let participant = jsonLJ.LJ.find(
          (participant) => participant.bib === bib
        );

        if (!participant) {
          console.log("no results athlete");
        } else {
          if (participant.results[0].res == "") {
            participant.results[0].res = res;
            participant.results[0].wind = wind;

            fs.writeFileSync(filePath, JSON.stringify(jsonLJ, null, 2), "utf8");
          } else if (participant.results[1].res == "") {
            participant.results[1].res = res;
            participant.results[1].wind = wind;

            fs.writeFileSync(filePath, JSON.stringify(jsonLJ, null, 2), "utf8");
          } else if (participant.results[2].res == "") {
            participant.results[2].res = res;
            participant.results[2].wind = wind;

            fs.writeFileSync(filePath, JSON.stringify(jsonLJ, null, 2), "utf8");
          } else if (participant.results[3].res == "") {
            participant.results[3].res = res;
            participant.results[3].wind = wind;

            fs.writeFileSync(filePath, JSON.stringify(jsonLJ, null, 2), "utf8");
          } else if (participant.results[4].res == "") {
            participant.results[4].res = res;
            participant.results[4].wind = wind;

            fs.writeFileSync(filePath, JSON.stringify(jsonLJ, null, 2), "utf8");
          } else if (participant.results[5].res == "") {
            participant.results[5].res = res;
            participant.results[5].wind = wind;

            fs.writeFileSync(filePath, JSON.stringify(jsonLJ, null, 2), "utf8");
          }
        }

        let jsonDATA = {
          command: "LJ",
          name: participant?.name ?? "",
          bib: bib,
          club: participant?.club ?? "",
          results: participant?.results ?? "",

          nextName: nextParticipant?.name ?? "",
          nextBib: nextParticipant?.bib ?? "",
          nextClub: nextParticipant?.club ?? "",
          nextResults: nextParticipant?.results ?? [],
        };

        let jsonSEND = JSON.stringify(jsonDATA);
        client.send(jsonSEND);
      } catch (parseError) {
        console.error(parseError);
      }
    });
  } else if (jsonIn.command == "showLJprevius") {
    obs.connect("ws://192.168.1.75:4444").then(() => {
      obs.call("SetSceneItemEnabled", {
        sceneName: "LIVE",
        sceneItemId: 23,
        sceneItemEnabled: true,
      });
      obs.call("SetSceneItemEnabled", {
        sceneName: "LIVE",
        sceneItemId: 22,
        sceneItemEnabled: true,
      });
      obs.call("SetSceneItemEnabled", {
        sceneName: "LIVE",
        sceneItemId: 18,
        sceneItemEnabled: true,
      });
      setTimeout(() => {
        obs.call("SetSceneItemEnabled", {
          sceneName: "LIVE",
          sceneItemId: 23,
          sceneItemEnabled: false,
        });
      }, 10000);
      setTimeout(() => {
        obs.call("SetSceneItemEnabled", {
          sceneName: "LIVE",
          sceneItemId: 22,
          sceneItemEnabled: false,
        });
      }, 10000);
      setTimeout(() => {
        obs.call("SetSceneItemEnabled", {
          sceneName: "LIVE",
          sceneItemId: 18,
          sceneItemEnabled: false,
        });
      }, 10000);
    });
  } else if (jsonIn.command == "showLJnext") {
    obs.connect("ws://192.168.1.75:4444").then(() => {
      obs.call("SetSceneItemEnabled", {
        sceneName: "LIVE",
        sceneItemId: 21,
        sceneItemEnabled: true,
      });
      obs.call("SetSceneItemEnabled", {
        sceneName: "LIVE",
        sceneItemId: 20,
        sceneItemEnabled: true,
      });
      obs.call("SetSceneItemEnabled", {
        sceneName: "LIVE",
        sceneItemId: 18,
        sceneItemEnabled: true,
      });
      setTimeout(() => {
        obs.call("SetSceneItemEnabled", {
          sceneName: "LIVE",
          sceneItemId: 21,
          sceneItemEnabled: false,
        });
      }, 10000);
      setTimeout(() => {
        obs.call("SetSceneItemEnabled", {
          sceneName: "LIVE",
          sceneItemId: 20,
          sceneItemEnabled: false,
        });
      }, 10000);
      setTimeout(() => {
        obs.call("SetSceneItemEnabled", {
          sceneName: "LIVE",
          sceneItemId: 18,
          sceneItemEnabled: false,
        });
      }, 10000);
    });
  } else if (jsonIn.command == "sendTJ") {
    let filePath = path.join(__dirname, "../database/TJ.json");

    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      try {
        let bib = jsonIn.bib;
        let res = jsonIn.res;
        let nextBib = jsonIn.nextBib;
        let wind = jsonIn.wind;

        let jsonTJ = JSON.parse(data);
        let nextParticipant = jsonTJ.TJ.find(
          (nextParticipant) => nextParticipant.bib === nextBib
        );
        let participant = jsonTJ.TJ.find(
          (participant) => participant.bib === bib
        );

        if (!participant) {
          console.log("no TJ results athlete");
        } else {
          if (participant.results[0].res == "") {
            participant.results[0].res = res;
            participant.results[0].wind = wind;

            fs.writeFileSync(filePath, JSON.stringify(jsonTJ, null, 2), "utf8");
          } else if (participant.results[1].res == "") {
            participant.results[1].res = res;
            participant.results[1].wind = wind;

            fs.writeFileSync(filePath, JSON.stringify(jsonTJ, null, 2), "utf8");
          } else if (participant.results[2].res == "") {
            participant.results[2].res = res;
            participant.results[2].wind = wind;

            fs.writeFileSync(filePath, JSON.stringify(jsonTJ, null, 2), "utf8");
          } else if (participant.results[3].res == "") {
            participant.results[3].res = res;
            participant.results[3].wind = wind;

            fs.writeFileSync(filePath, JSON.stringify(jsonTJ, null, 2), "utf8");
          } else if (participant.results[4].res == "") {
            participant.results[4].res = res;
            participant.results[4].wind = wind;

            fs.writeFileSync(filePath, JSON.stringify(jsonTJ, null, 2), "utf8");
          } else if (participant.results[5].res == "") {
            participant.results[5].res = res;
            participant.results[5].wind = wind;

            fs.writeFileSync(filePath, JSON.stringify(jsonTJ, null, 2), "utf8");
          }
        }

        let jsonDATA = {
          command: "TJ",
          name: participant?.name ?? "",
          bib: bib,
          club: participant?.club ?? "",
          results: participant?.results ?? "",

          nextName: nextParticipant?.name ?? "",
          nextBib: nextParticipant?.bib ?? "",
          nextClub: nextParticipant?.club ?? "",
          nextResults: nextParticipant?.results ?? [],
        };

        let jsonSEND = JSON.stringify(jsonDATA);
        client.send(jsonSEND);
      } catch (parseError) {
        console.error(parseError);
      }
    });
  } else if (jsonIn.command == "showTJprevius") {
    obs.connect("ws://192.168.1.75:4444").then(() => {
      obs.call("SetSceneItemEnabled", {
        sceneName: "LIVE",
        sceneItemId: 33,
        sceneItemEnabled: true,
      });
      obs.call("SetSceneItemEnabled", {
        sceneName: "LIVE",
        sceneItemId: 34,
        sceneItemEnabled: true,
      });
      obs.call("SetSceneItemEnabled", {
        sceneName: "LIVE",
        sceneItemId: 18,
        sceneItemEnabled: true,
      });
      setTimeout(() => {
        obs.call("SetSceneItemEnabled", {
          sceneName: "LIVE",
          sceneItemId: 33,
          sceneItemEnabled: false,
        });
      }, 10000);
      setTimeout(() => {
        obs.call("SetSceneItemEnabled", {
          sceneName: "LIVE",
          sceneItemId: 34,
          sceneItemEnabled: false,
        });
      }, 10000);
      setTimeout(() => {
        obs.call("SetSceneItemEnabled", {
          sceneName: "LIVE",
          sceneItemId: 18,
          sceneItemEnabled: false,
        });
      }, 10000);
    });
  } else if (jsonIn.command == "showTJnext") {
    obs.connect("ws://192.168.1.75:4444").then(() => {
      obs.call("SetSceneItemEnabled", {
        sceneName: "LIVE",
        sceneItemId: 31,
        sceneItemEnabled: true,
      });
      obs.call("SetSceneItemEnabled", {
        sceneName: "LIVE",
        sceneItemId: 32,
        sceneItemEnabled: true,
      });
      obs.call("SetSceneItemEnabled", {
        sceneName: "LIVE",
        sceneItemId: 18,
        sceneItemEnabled: true,
      });
      setTimeout(() => {
        obs.call("SetSceneItemEnabled", {
          sceneName: "LIVE",
          sceneItemId: 31,
          sceneItemEnabled: false,
        });
      }, 10000);
      setTimeout(() => {
        obs.call("SetSceneItemEnabled", {
          sceneName: "LIVE",
          sceneItemId: 32,
          sceneItemEnabled: false,
        });
      }, 10000);
      setTimeout(() => {
        obs.call("SetSceneItemEnabled", {
          sceneName: "LIVE",
          sceneItemId: 18,
          sceneItemEnabled: false,
        });
      }, 10000);
    });
  }
});

module.exports = router;
