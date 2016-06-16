var dict = {
	Crs:{
		long:{
			en:"Respiratory system compliance",
			fr:"Compliance du système respiratoire"
		 },
		short:{
			en:"C<sub>rs</sub>",
			fr:"C<sub>sr</sub>"
		 }
	},
	Fiph:{
		long:{
			en:"Phasitron input flow (high)",
			fr:"Débit d'entrée du phasitron (haut)"
		 },
		short:{
			en:"V\'<sub>iph</sub>",
			en:"V\'<sub>eph</sub>",
		 }
	},
	Fipl:{
		long:{
			en:"Phasitron input flow (low)",
			fr:"Débit d'entrée du phasitron (bas)"
		 },
		short:{
			en:"V\'<sub>ipl</sub>",
			en:"V\'<sub>epb</sub>",
		 }
	},
	Fop:{
		long:{
			en:"Phasitron output flow",
			fr: "Débit de sortie du phasitron"
		},
		short:{
			en: "V'<sub>po</sub>"	
		}
	},
	Fconv: {
		short:{
			en:"F<sub>conv</sub>"
		},
		long:{
			en:"Convective frequency",
			fr:"Fréquence convective"
		}
	},
	Fperc: {
		short:{
			en:"F<sub>perc</sub>"
		},
		long:{
			en:"Percussive frequency",
			fr:"Fréquence percussive"
		}
	},
	Flung:{
		long:{
			en:"Flow",
			fr:"Débit"
		},
		short:{
			en:"V'<sub>lung</sub>"
		}
	},
	Ftrig:{
		long:{
			fr:"Déclenchement"
		},
		short:{
			fr:"V'<sub>décl.</sub>"
		}
	},
	lowPassFactor: {
		short:{
			en:"lowPass",
			fr:"passeBas"
		},
		long:{
			en:"Low pass filter factor",
			fr:"Facteur de division du filtre passe bas"
		}
	},
	Lung:{
		long: {
		en:"Lung",
		fr:"Poumon"
		}
	 },
	Parameters:{
		long: {
			en:"Parameters",
			fr:"Paramètres"
		}
	   },
	Pao:{
		long:{
			en:"Presure at airway openning",
			fr:"Pression à l'ouverture des voies aériennes"
		},
		short:{
			en: "P<sub>circ.</sub>"	
		}
	},
	Palv:{
		long:{
			en:"Alveolar presure",
			fr:"Pression alvéolaire"
		},
		short:{
			en:"P<sub>alv</sub>"
		}
	},
	Passist: {
		long: {fr: "Aide inspiratoire"},
		short: {fr: "P<sub>AI</sub>"}
	},
	PCO2 : {
		short: {
			fr: 'PCO₂',
			en: 'PCO₂'
		},
		long: {
			fr: 'PCO₂',
			en: 'PCO₂'
		}
	},
	PEEP :{
		long : {
			en : "Positive end expiratoy presure",
			fr: "Pression expiratoire positive"
		},
		short : {
			en : "PEEP",
			fr : "PEP"
		}
	},
	Pinspi: {
		long: {
			fr: 'Pression inspiratoire'
		}
	},
	Rit:{
		long:{
			en:"Percussive nspiratory time fraction",
			fr:"Fraction de temps inspiratoire percussif"
		 },
		short:{
			en:"T<sub>i</sub>/T<sub>tot.</sub>",
		 }
	},
	Raw:{
		long:{
			en:"Airway resistance",
			fr:"Résistance des voies aériennes"
		 },
		short:{
			en:"R<sub>aw</sub>",
			fr:"R<sub>vr</sub>"
		 }
	},
	Simulator:{
		long: {
			en:"Simulator",
			fr:"Simulateur"
			  }
	},
	Ti:{
		long:{
			en:"Inspiratory time",
			fr:"Temps inspiratoire"
		 },
		short:{
			en:"T<sub>i</sub>",
			fr:"T<sub>i</sub>"
		 }
	},
	Te:{
		long:{
			en:"Expiratory time",
			fr:"Temps expiratoire"
		 },
		short:{
			en:"T<sub>e</sub>",
			fr:"T<sub>e</sub>"
		 }
	},
	Tip:{
		long:{
			en:"Percussive inspiratory time",
			fr:"Temps inspiratoire percussif"
		 },
		short:{
			en:"T<sub>i perc.</sub>",
			fr:"T<sub>i perc.</sub>"
		 }
	},
	Tep:{
		long:{
			en:"Percussive expiratory time",
			fr:"Temps expiratoire percussif"
		 },
		short:{
			en:"T<sub>e perc.</sub>",
			fr:"T<sub>e perc.</sub>"
		 }
	},
	Tic:{
		long:{
			en:"Convective inspiratory time",
			fr:"Temps inspiratoire convectif"
		 },
		short:{
			en:"T<sub>i conv.</sub>",
			fr:"T<sub>i conv.</sub>"
		 }
	},
	Tec:{
		long:{
			en:"Convective expiratory time",
			fr:"Temps expiratoire convectif"
		 },
		short:{
			en:"T<sub>e conv.</sub>",
			fr:"T<sub>e conv.</sub>"
		 }
	},
	Tramp:{
		long:{
			en:"Presure rise time",
			fr:"Temps de pente"
		 },
		short:{
			en:"T<sub>ramp</sub>",
			fr:"T<sub>pente</sub>"
		 }
	},
	Ventilate:{
		long : {
			en:"Ventilate",
			fr:"Ventiler"
		}
	  },
	Tsampl:{
		long:{
			en:"Sampling interval",
			fr:"Intervale d'échantillonnage"
		 },
		short:{
			en:"T<sub>sampl</sub>",
			fr:"T<sub>echant.</sub>"
		 }
	},
	Tvent:{
		long:{
			en:"Ventilation duration",
			fr:"Durée de ventilation"
		 },
		short:{
			en:"T<sub>vent</sub>",
		 }
	},
	Vt:{
		long:{
			en:"Tidal volume",
			fr:"Volume courant"
		},
		short:{
			en: "V<sub>t</sub>"	
		}
	},
	Vtip:{
		long:{
			en:"Percussive inspiratory tidal volume",
			fr:"Volume courant percussif inspiré"
		},
		short:{
			en: "V<sub>ti perc.</sub>"	
		}
	},
	rolingAverage: {
		short:{
			en:"N<sub>avg</suv>",
			fr:"N<sub>moy.</suv>"
		},
		long:{
			en:"Roling average (number of values)",
			fr:"Moyenne mobile (nombre de valeurs)"
		}
	},
	Rexp: {
		long: {
			en: "Phasitron expiratory resistance",
			fr: "Résistance expiratoire du phasitron"
		  },
		short: {
			en: "R<sub>exp</sub>"
			   }
		  }

};
