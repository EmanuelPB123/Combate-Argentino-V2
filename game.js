class Game {
  constructor() {
    this.grid = new Grid(12, 12);
    this.units = [];
    this.selectedUnit = null;
    this.turn = 'player';
    this.ai = new AI(this);

    this.campaigns = [
      {
        name: "Guerra de Independencia (1810-1818)",
        missions: [
          {
            name: "El Primer Grito (1810)",
            description: "Defender el Cabildo",
            playerUnits: [
              { type: 'oficialCriollo', moveRange: 3, health: 20, attack: 4, name: "Oficial Criollo" },
              { type: 'milicianoArmado', moveRange: 2, health: 15, attack: 5, name: "Miliciano Armado" },
              { type: 'milicianoLancero', moveRange: 2, health: 18, attack: 6, name: "Miliciano Lancero" },
              { type: 'artilleroPorteno', moveRange: 1, health: 12, attack: 8, name: "Artillero Porteño" },
              { type: 'espiaRevolucionario', moveRange: 4, health: 10, attack: 3, name: "Espía Revolucionario" }
            ],
            aiUnits: [
              { type: 'oficialEspanol', moveRange: 3, health: 20, attack: 4, name: "Oficial Español" },
              { type: 'soldadoRegular', moveRange: 2, health: 15, attack: 5, name: "Soldado Regular" },
              { type: 'dragonReina', moveRange: 4, health: 18, attack: 6, name: "Dragón de la Reina" },
              { type: 'granaderoRealista', moveRange: 2, health: 16, attack: 7, name: "Granadero Realista" },
              { type: 'tiradorGallego', moveRange: 3, health: 12, attack: 8, name: "Tirador Gallego" }
            ]
          },
          {
            name: "Cruce de los Andes (1817)",
            description: "Atravesar la Cordillera",
            playerUnits: [
              { type: 'sanMartin', moveRange: 3, health: 25, attack: 6, name: "General San Martín" },
              { type: 'guiaAndino', moveRange: 4, health: 15, attack: 3, name: "Guía Andino" },
              { type: 'granaderoACaballo', moveRange: 5, health: 20, attack: 7, name: "Granadero a Caballo" },
              { type: 'infanteriaLigera', moveRange: 3, health: 18, attack: 5, name: "Soldado de Infantería Ligera" },
              { type: 'medicoCampana', moveRange: 2, health: 12, attack: 2, name: "Médico de Campaña" }
            ],
            aiUnits: [
              { type: 'comandanteRealista', moveRange: 3, health: 22, attack: 5, name: "Comandante Realista" },
              { type: 'guerrilleroMapuche', moveRange: 4, health: 16, attack: 4, name: "Guerrillero Mapuche" },
              { type: 'cazadorMontana', moveRange: 3, health: 15, attack: 6, name: "Cazador de Montaña" },
              { type: 'infanteRealista', moveRange: 2, health: 18, attack: 5, name: "Infante Realista" },
              { type: 'exploradorRealista', moveRange: 4, health: 14, attack: 4, name: "Explorador Realista" }
            ]
          },
          {
            name: "Batalla de Chacabuco (1817)",
            description: "Asalta la posición enemiga",
            playerUnits: [
              { type: 'oficialInfanteria', moveRange: 3, health: 20, attack: 5, name: "Oficial de Infantería" },
              { type: 'soldadoVeterano', moveRange: 2, health: 22, attack: 6, name: "Soldado Veterano" },
              { type: 'tiradorAndino', moveRange: 3, health: 15, attack: 7, name: "Tirador Andino" },
              { type: 'sableadorCaballo', moveRange: 4, health: 18, attack: 6, name: "Sableador a Caballo" },
              { type: 'tamborBatalla', moveRange: 2, health: 12, attack: 3, name: "Tambor de Batalla" }
            ],
            aiUnits: [
              { type: 'capitanRealista', moveRange: 3, health: 20, attack: 5, name: "Capitán Realista" },
              { type: 'fusileroRealista', moveRange: 2, health: 18, attack: 5, name: "Fusilero Realista" },
              { type: 'artilleroTrinchera', moveRange: 1, health: 15, attack: 8, name: "Artillero de Trinchera" },
              { type: 'lanceroCorona', moveRange: 3, health: 16, attack: 6, name: "Lancero de la Corona" },
              { type: 'abanderadoEspanol', moveRange: 2, health: 14, attack: 3, name: "Abanderado Español" }
            ]
          },
          {
            name: "Batalla de Cancha Rayada (1818)",
            description: "Sobrevive a la emboscada",
            playerUnits: [
              { type: 'generalRetirada', moveRange: 3, health: 20, attack: 5, name: "General en Retirada" },
              { type: 'soldadoExausto', moveRange: 2, health: 15, attack: 4, name: "Soldado Exausto" },
              { type: 'exploradorAvanzada', moveRange: 4, health: 14, attack: 4, name: "Explorador de Avanzada" },
              { type: 'heroePopular', moveRange: 3, health: 18, attack: 6, name: "Héroe Popular" },
              { type: 'medicoEmergencia', moveRange: 2, health: 12, attack: 2, name: "Médico de Emergencia" }
            ],
            aiUnits: [
              { type: 'comandanteEmboscada', moveRange: 3, health: 20, attack: 6, name: "Comandante de Emboscada" },
              { type: 'infanteAsalto', moveRange: 3, health: 18, attack: 6, name: "Infante de Asalto" },
              { type: 'cazadorNocturno', moveRange: 4, health: 15, attack: 7, name: "Cazador Nocturno" },
              { type: 'lanceroEmboscador', moveRange: 4, health: 16, attack: 6, name: "Lancero Emboscador" },
              { type: 'tiradorElite', moveRange: 3, health: 14, attack: 8, name: "Tirador de Elite" }
            ]
          },
          {
            name: "Batalla de Maipú (1818)",
            description: "La victoria final",
            playerUnits: [
              { type: 'sanMartinSupremo', moveRange: 3, health: 25, attack: 6, name: "San Martín (General Supremo)" },
              { type: 'oficialCaballeria', moveRange: 4, health: 20, attack: 5, name: "Oficial de Caballería" },
              { type: 'infanteLinea', moveRange: 2, health: 18, attack: 5, name: "Infante de Línea" },
              { type: 'artilleroPatriota', moveRange: 1, health: 15, attack: 8, name: "Artillero Patriota" },
              { type: 'tamborMayor', moveRange: 2, health: 14, attack: 3, name: "Tambor Mayor" }
            ],
            aiUnits: [
              { type: 'comandanteOsorio', moveRange: 3, health: 22, attack: 5, name: "Comandante Osorio" },
              { type: 'dragonCorona', moveRange: 4, health: 20, attack: 6, name: "Dragón de la Corona" },
              { type: 'infanteEspanol', moveRange: 2, health: 18, attack: 5, name: "Infante Español" },
              { type: 'granaderoGuardia', moveRange: 3, health: 20, attack: 7, name: "Granadero de la Guardia" },
              { type: 'abanderadoCorona', moveRange: 2, health: 15, attack: 3, name: "Abanderado de la Corona" }
            ]
          }
        ]
      },
      {
        name: "Guerra Civil (1828-1831)",
        missions: [
          {
            name: "Asalto a Buenos Aires (1828)",
            description: "Toma la ciudad",
            playerUnits: [
              { type: 'caudilloFederal', moveRange: 3, health: 20, attack: 5, name: "Caudillo Federal" },
              { type: 'milicianoLanza', moveRange: 4, health: 18, attack: 6, name: "Miliciano de Lanza" },
              { type: 'infanteRural', moveRange: 2, health: 15, attack: 5, name: "Infante Rural" },
              { type: 'artilleroMontonero', moveRange: 1, health: 12, attack: 8, name: "Artillero Montonero" },
              { type: 'espiaFederal', moveRange: 4, health: 10, attack: 3, name: "Espía Federal" }
            ],
            aiUnits: [
              { type: 'oficialUnitario', moveRange: 3, health: 20, attack: 5, name: "Oficial Unitario" },
              { type: 'infantePorteno', moveRange: 2, health: 15, attack: 5, name: "Infante Porteño" },
              { type: 'guardiaCiudad', moveRange: 3, health: 18, attack: 6, name: "Guardia de la Ciudad" },
              { type: 'tiradorAzotea', moveRange: 3, health: 14, attack: 7, name: "Tirador de Azotea" },
              { type: 'artilleroUnitario', moveRange: 1, health: 12, attack: 8, name: "Artillero Unitario" }
            ]
          },
          {
            name: "Batalla de El Tala (1829)",
            description: "Emboscada en los montes",
            playerUnits: [
              { type: 'caudilloMontonero', moveRange: 3, health: 22, attack: 5, name: "Caudillo Montonero" },
              { type: 'lanceroCaballo', moveRange: 4, health: 18, attack: 6, name: "Lancero a Caballo" },
              { type: 'infanteMonte', moveRange: 3, health: 16, attack: 7, name: "Infante de Monte" },
              { type: 'tiradorFederal', moveRange: 3, health: 14, attack: 6, name: "Tirador Federal" },
              { type: 'exploradorAvanzada', moveRange: 4, health: 12, attack: 4, name: "Explorador de Avanzada" }
            ],
            aiUnits: [
              { type: 'coronelUnitario', moveRange: 3, health: 20, attack: 5, name: "Coronel Unitario" },
              { type: 'dragonLinea', moveRange: 4, health: 20, attack: 6, name: "Dragón de Línea" },
              { type: 'fusileroUnitario', moveRange: 2, health: 15, attack: 5, name: "Fusilero Unitario" },
              { type: 'tiradorSelva', moveRange: 3, health: 14, attack: 7, name: "Tirador de Selva" },
              { type: 'artilleroMovil', moveRange: 2, health: 12, attack: 8, name: "Artillero Móvil" }
            ]
          },
          {
            name: "Defensa de Santa Fe (1830)",
            description: "Aguanta el asedio",
            playerUnits: [
              { type: 'gobernadorFederal', moveRange: 3, health: 25, attack: 5, name: "Gobernador Federal" },
              { type: 'milicianoSantafesino', moveRange: 2, health: 15, attack: 5, name: "Miliciano Santafesino" },
              { type: 'granaderoCaballeria', moveRange: 4, health: 20, attack: 7, name: "Granadero de Caballería" },
              { type: 'artilleroPlaza', moveRange: 1, health: 12, attack: 8, name: "Artillero de Plaza" },
              { type: 'medicoCampana', moveRange: 2, health: 12, attack: 2, name: "Médico de Campaña" }
            ],
            aiUnits: [
              { type: 'generalUnitario', moveRange: 3, health: 22, attack: 5, name: "General Unitario" },
              { type: 'infanteChoque', moveRange: 3, health: 18, attack: 6, name: "Infante de Choque" },
              { type: 'lanceroUnitario', moveRange: 4, health: 16, attack: 6, name: "Lancero Unitario" },
              { type: 'zapadorAsedio', moveRange: 2, health: 14, attack: 7, name: "Zapador de Asedio" },
              { type: 'tiradorVanguardia', moveRange: 3, health: 14, attack: 7, name: "Tirador de Vanguardia" }
            ]
          },
          {
            name: "Batalla de Oncativo (1830)",
            description: "Derrota a Lavalle",
            playerUnits: [
              { type: 'facundoQuiroga', moveRange: 3, health: 25, attack: 6, name: "Juan Facundo Quiroga" },
              { type: 'gauchoLuchador', moveRange: 4, health: 18, attack: 7, name: "Gaucho Luchador" },
              { type: 'infanteFederal', moveRange: 2, health: 15, attack: 5, name: "Infante Federal" },
              { type: 'caballeriaLigera', moveRange: 5, health: 16, attack: 5, name: "Caballería Ligera" },
              { type: 'tamborFederal', moveRange: 2, health: 12, attack: 3, name: "Tambor Federal" }
            ],
            aiUnits: [
              { type: 'juanLavalle', moveRange: 3, health: 25, attack: 6, name: "Juan Lavalle" },
              { type: 'infanteLinea', moveRange: 2, health: 18, attack: 5, name: "Infante de Línea" },
              { type: 'dragonUnitario', moveRange: 4, health: 20, attack: 6, name: "Dragón Unitario" },
              { type: 'artilleroCampana', moveRange: 1, health: 12, attack: 8, name: "Artillero de Campaña" },
              { type: 'abanderadoUnitario', moveRange: 2, health: 14, attack: 3, name: "Abanderado Unitario" }
            ]
          },
          {
            name: "Caza de los Unitarios (1831)",
            description: "Eliminar a los últimos enemigos",
            playerUnits: [
              { type: 'jefeCazadores', moveRange: 3, health: 22, attack: 5, name: "Jefe de Cazadores" },
              { type: 'rastreadorMontonero', moveRange: 4, health: 15, attack: 4, name: "Rastreador Montonero" },
              { type: 'lanceroFederal', moveRange: 4, health: 18, attack: 6, name: "Lancero Federal" },
              { type: 'tiradorCaza', moveRange: 3, health: 14, attack: 7, name: "Tirador de Caza" },
              { type: 'exploradorIndigena', moveRange: 4, health: 16, attack: 5, name: "Explorador Indígena" }
            ],
            aiUnits: [
              { type: 'oficialFuga', moveRange: 3, health: 20, attack: 5, name: "Oficial en Fuga" },
              { type: 'guerrilleroUnitario', moveRange: 3, health: 16, attack: 6, name: "Guerrillero Unitario" },
              { type: 'caballoRapido', moveRange: 5, health: 15, attack: 5, name: "Caballo Rápido" },
              { type: 'fusileroRetaguardia', moveRange: 2, health: 14, attack: 6, name: "Fusilero de Retaguardia" },
              { type: 'emboscadorDefensa', moveRange: 3, health: 12, attack: 7, name: "Emboscador de Última Defensa" }
            ]
          }
        ]
      },
      {
        name: "Guerra del Paraguay (1864-1870)",
        missions: [
          {
            name: "Infiltración en zona enemiga",
            description: "Reconocimiento",
            playerUnits: [
              { type: 'comandoOperaciones', moveRange: 4, health: 20, attack: 6, name: "Comando de Operaciones Especiales" },
              { type: 'francotiradorRecon', moveRange: 3, health: 15, attack: 8, name: "Francotirador de Reconocimiento" },
              { type: 'operadorDrones', moveRange: 5, health: 12, attack: 4, name: "Operador de Drones" },
              { type: 'zapadorExploracion', moveRange: 3, health: 18, attack: 5, name: "Zapador de Exploración" },
              { type: 'espiaEncubierto', moveRange: 4, health: 10, attack: 3, name: "Espía Encubierto" }
            ],
            aiUnits: [
              { type: 'guardiaPerimetro', moveRange: 3, health: 20, attack: 5, name: "Guardia de Perímetro" },
              { type: 'francotiradorVigilancia', moveRange: 2, health: 15, attack: 7, name: "Francotirador de Vigilancia" },
              { type: 'operadorRadar', moveRange: 3, health: 12, attack: 4, name: "Operador de Radar" },
              { type: 'unidadReaccion', moveRange: 5, health: 18, attack: 6, name: "Unidad de Reacción Rápida" },
              { type: 'perrosRastreadores', moveRange: 4, health: 15, attack: 5, name: "Perros Rastreadores" }
            ]
          },
          {
            name: "Rescate de rehenes",
            description: "Operación de rescate",
            playerUnits: [
              { type: 'liderRescate', moveRange: 3, health: 22, attack: 5, name: "Líder de la Unidad de Rescate" },
              { type: 'especialistaDemoliciones', moveRange: 2, health: 18, attack: 6, name: "Especialista en Demoliciones" },
              { type: 'francotiradorApoyo', moveRange: 3, health: 15, attack: 8, name: "Francotirador de Apoyo" },
              { type: 'operadorEscudo', moveRange: 2, health: 25, attack: 4, name: "Operador de Escudo Balístico" },
              { type: 'medicoCombate', moveRange: 3, health: 15, attack: 3, name: "Médico de Combate" }
            ],
            aiUnits: [
              { type: 'jefeSeguridad', moveRange: 3, health: 20, attack: 6, name: "Jefe de Seguridad" },
              { type: 'terroristaRehen', moveRange: 2, health: 15, attack: 7, name: "Terrorista con Rehén" },
              { type: 'francotiradorAzotea', moveRange: 1, health: 12, attack: 9, name: "Francotirador en Azotea" },
              { type: 'guardiaInterior', moveRange: 3, health: 18, attack: 5, name: "Unidad de Guardia Interior" },
              { type: 'explosivista', moveRange: 2, health: 15, attack: 6, name: "Explosivista" }
            ]
          },
          {
            name: "Asalto a una base enemiga",
            description: "Destrucción de material enemigo",
            playerUnits: [
              { type: 'comandanteAtaque', moveRange: 3, health: 25, attack: 6, name: "Comandante de Ataque" },
              { type: 'soldadoLanzacohetes', moveRange: 2, health: 18, attack: 8, name: "Soldado con Lanzacohetes" },
              { type: 'operadorUAV', moveRange: 4, health: 12, attack: 4, name: "Operador de UAV" },
              { type: 'fuerzasAsalto', moveRange: 4, health: 20, attack: 6, name: "Fuerzas de Asalto Nocturno" },
              { type: 'artilleroPesado', moveRange: 2, health: 15, attack: 7, name: "Artillero Pesado" }
            ],
            aiUnits: [
              { type: 'comandanteBase', moveRange: 3, health: 22, attack: 5, name: "Comandante de la Base" },
              { type: 'operadorAntiaerea', moveRange: 2, health: 18, attack: 7, name: "Operador de Defensa Antiaérea" },
              { type: 'francotiradorLargo', moveRange: 3, health: 15, attack: 8, name: "Francotirador de Largo Alcance" },
              { type: 'unidadBlindada', moveRange: 4, health: 25, attack: 6, name: "Unidad de Respuesta Blindada" },
              { type: 'zapadorDefensivo', moveRange: 2, health: 16, attack: 5, name: "Zapador Defensivo" }
            ]
          },
          {
            name: "Escape de la emboscada",
            description: "Supervivencia",
            playerUnits: [
              { type: 'capitanUnidad', moveRange: 3, health: 20, attack: 5, name: "Capitán de la Unidad Atrapada" },
              { type: 'tiradorElite', moveRange: 3, health: 15, attack: 8, name: "Tirador de Élite" },
              { type: 'operadorRadio', moveRange: 2, health: 12, attack: 3, name: "Operador de Radio" },
              { type: 'medicoCampo', moveRange: 3, health: 15, attack: 3, name: "Médico de Campo" },
              { type: 'ingenieroMilitar', moveRange: 2, health: 18, attack: 5, name: "Ingeniero Militar" }
            ],
            aiUnits: [
              { type: 'comandanteEmboscador', moveRange: 3, health: 20, attack: 6, name: "Comandante Emboscador" },
              { type: 'francotiradorElevacion', moveRange: 2, health: 15, attack: 8, name: "Francotirador en Elevación" },
              { type: 'artilleroApoyo', moveRange: 1, health: 18, attack: 7, name: "Artillero de Apoyo" },
              { type: 'unidadPersecucion', moveRange: 4, health: 16, attack: 5, name: "Unidad de Persecución" },
              { type: 'soldadoRPG', moveRange: 2, health: 14, attack: 8, name: "Soldado con RPG" }
            ]
          },
          {
            name: "Eliminación del comandante enemigo",
            description: "Golpe a la cabeza",
            playerUnits: [
              { type: 'liderOperacion', moveRange: 3, health: 20, attack: 6, name: "Líder de la Operación Especial" },
              { type: 'francotiradorIntervencion', moveRange: 3, health: 15, attack: 9, name: "Francotirador de Intervención" },
              { type: 'especialistaSilenciadores', moveRange: 4, health: 18, attack: 6, name: "Especialista en Silenciadores" },
              { type: 'tecnicoHackeo', moveRange: 2, health: 12, attack: 3, name: "Técnico de Hackeo" },
              { type: 'escapistaExperto', moveRange: 5, health: 15, attack: 4, name: "Escapista Experto" }
            ],
            aiUnits: [
              { type: 'comandanteEnemigo', moveRange: 2, health: 25, attack: 7, name: "Comandante Enemigo" },
              { type: 'jefeSeguridad', moveRange: 3, health: 20, attack: 6, name: "Jefe de Seguridad" },
              { type: 'francotiradorRespuesta', moveRange: 3, health: 15, attack: 8, name: "Francotirador de Respuesta" },
              { type: 'operadorCamaras', moveRange: 2, health: 12, attack: 4, name: "Operador de Cámaras y Sensores" },
              { type: 'soldadoGuardia', moveRange: 3, health: 18, attack: 5, name: "Soldado de Guardia" }
            ]
          }
        ]
      },
      {
        name: "Guerra de Malvinas (1982)",
        missions: [
          {
            name: "Desembarco en las Malvinas",
            description: "Recuperar las islas",
            playerUnits: [
              { type: 'comandanteAnfibio', moveRange: 3, health: 22, attack: 5, name: "Comandante de Operación Anfibia" },
              { type: 'infanteMarina', moveRange: 4, health: 18, attack: 6, name: "Infante de Marina" },
              { type: 'zapadorCombate', moveRange: 2, health: 15, attack: 5, name: "Zapador de Combate" },
              { type: 'fusileroAvanzada', moveRange: 3, health: 16, attack: 7, name: "Fusilero de Avanzada" },
              { type: 'comunicacionesElectronicas', moveRange: 2, health: 12, attack: 3, name: "Comunicaciones y Guerra Electrónica" }
            ],
            aiUnits: [
              { type: 'comandanteDefensa', moveRange: 3, health: 20, attack: 5, name: "Comandante de Defensa de Puerto Stanley" },
              { type: 'royalMarine', moveRange: 3, health: 18, attack: 6, name: "Royal Marine Defensor" },
              { type: 'francotiradorVigilancia', moveRange: 2, health: 15, attack: 8, name: "Francotirador de Vigilancia" },
              { type: 'explosivistaDefensa', moveRange: 2, health: 14, attack: 6, name: "Explosivista" },
              { type: 'operadorRadio', moveRange: 2, health: 12, attack: 3, name: "Operador de Radio" }
            ]
          },
          {
            name: "Batalla de Goose Green",
            description: "Resistencia en el terreno",
            playerUnits: [
              { type: 'comandanteResistencia', moveRange: 3, health: 20, attack: 5, name: "Comandante de la Resistencia" },
              { type: 'tiradorFAL', moveRange: 3, health: 15, attack: 7, name: "Tirador con FAL" },
              { type: 'artilleroMortero', moveRange: 2, health: 18, attack: 8, name: "Artillero con Mortero" },
              { type: 'ametralladorista', moveRange: 2, health: 16, attack: 6, name: "Ametralladorista" },
              { type: 'explorador', moveRange: 4, health: 14, attack: 4, name: "Explorador" }
            ],
            aiUnits: [
              { type: 'comandanteAsalto', moveRange: 3, health: 20, attack: 5, name: "Comandante de la Fuerza de Asalto" },
              { type: 'fusileroParacaidista', moveRange: 4, health: 18, attack: 6, name: "Fusilero Paracaidista" },
              { type: 'francotiradorApoyo', moveRange: 2, health: 15, attack: 8, name: "Francotirador de Apoyo" },
              { type: 'especialistaNocturno', moveRange: 3, health: 16, attack: 6, name: "Especialista en Combate Nocturno" },
              { type: 'operadorGranadas', moveRange: 2, health: 14, attack: 7, name: "Operador de Lanzagranadas" }
            ]
          },
          {
            name: "Operación Black Buck",
            description: "Neutraliza la pista de aterrizaje",
            playerUnits: [
              { type: 'comandanteDefensaAerea', moveRange: 3, health: 20, attack: 5, name: "Comandante de Defensa Aérea" },
              { type: 'radarista', moveRange: 2, health: 15, attack: 4, name: "Radarista" },
              { type: 'operadorSAM', moveRange: 2, health: 18, attack: 8, name: "Operador de Misiles SAM" },
              { type: 'artilleroAntiaereo', moveRange: 2, health: 16, attack: 7, name: "Artillero Antiaéreo" },
              { type: 'ingenieroReparaciones', moveRange: 3, health: 14, attack: 3, name: "Ingeniero de Reparaciones" }
            ],
            aiUnits: [
              { type: 'pilotoVulcan', moveRange: 4, health: 20, attack: 7, name: "Piloto de Vulcan" },
              { type: 'naveganteBombardeo', moveRange: 3, health: 15, attack: 6, name: "Navegante de Bombardeo" },
              { type: 'pilotoReabastecimiento', moveRange: 4, health: 18, attack: 5, name: "Piloto de Reabastecimiento Aéreo" },
              { type: 'especialistaContramedidas', moveRange: 2, health: 14, attack: 4, name: "Especialista en Contramedidas Electrónicas" },
              { type: 'pilotoHarrier', moveRange: 5, health: 16, attack: 7, name: "Piloto de Harrier de Escolta" }
            ]
          },
          {
            name: "Combate en Monte Longdon",
            description: "Guerra en las alturas",
            playerUnits: [
              { type: 'comandanteBatalla', moveRange: 3, health: 20, attack: 5, name: "Comandante de Batalla" },
              { type: 'tiradorFAL2', moveRange: 3, health: 15, attack: 7, name: "Tirador con FAL" },
              { type: 'zapadorExplosivos', moveRange: 2, health: 16, attack: 6, name: "Zapador con Explosivos" },
              { type: 'observadorArtilleria', moveRange: 2, health: 14, attack: 4, name: "Observador de Artillería" },
              { type: 'soldadoNocturno', moveRange: 3, health: 18, attack: 6, name: "Soldado de Combate Nocturno" }
            ],
            aiUnits: [
              { type: 'liderAvanzada', moveRange: 3, health: 20, attack: 5, name: "Líder de la Avanzada Británica" },
              { type: 'fusileroLinea', moveRange: 3, health: 18, attack: 6, name: "Fusilero de Primera Línea" },
              { type: 'francotiradorApoyo2', moveRange: 2, health: 15, attack: 8, name: "Francotirador de Apoyo" },
              { type: 'especialistaNocturno2', moveRange: 3, health: 16, attack: 6, name: "Especialista en Guerra Nocturna" },
              { type: 'ingenieroAsalto', moveRange: 2, health: 14, attack: 5, name: "Ingeniero de Asalto" }
            ]
          },
          {
            name: "Última resistencia en Puerto Argentino",
            description: "Mantener la posición",
            playerUnits: [
              { type: 'comandanteGuarnicion', moveRange: 3, health: 22, attack: 5, name: "Comandante de la Guarnición" },
              { type: 'tiradorFAL3', moveRange: 3, health: 15, attack: 7, name: "Tirador con FAL" },
              { type: 'ametralladorista2', moveRange: 2, health: 18, attack: 8, name: "Ametralladorista" },
              { type: 'operadorMorteros', moveRange: 2, health: 16, attack: 7, name: "Operador de Morteros" },
              { type: 'explosivista2', moveRange: 2, health: 14, attack: 6, name: "Explosivista" }
            ],
            aiUnits: [
              { type: 'comandanteAsaltoFinal', moveRange: 3, health: 20, attack: 5, name: "Comandante del Asalto Final" },
              { type: 'fusileroAvance', moveRange: 3, health: 18, attack: 6, name: "Fusilero de Avance" },
              { type: 'francotiradorLargo', moveRange: 2, health: 15, attack: 8, name: "Francotirador de Largo Alcance" },
              { type: 'zapadorDemolicion', moveRange: 2, health: 16, attack: 6, name: "Zapador de Demolición" },
              { type: 'operadorRadio2', moveRange: 2, health: 12, attack: 3, name: "Operador de Radio" }
            ]
          }
        ]
      }
    ];

    this.currentCampaignIndex = 0;
    this.currentMissionIndex = 0;
  }

  start() {
    this.loadMission();
    this.placeInitialUnits();
    this.setupEventListeners();
    this.updateTurnDisplay();
    this.updateMissionUI();
  }

  loadMission() {
    this.units.forEach(unit => unit.destroy(this));
    this.units = [];
    this.grid.init(); 

    const campaign = this.campaigns[this.currentCampaignIndex];
    const mission = campaign.missions[this.currentMissionIndex];

    const numPlayerUnits = Math.min(mission.playerUnits.length, Math.floor(this.grid.width / 2));
    const numAIUnits = Math.min(mission.aiUnits.length, Math.floor(this.grid.width / 2));

    for (let i = 0; i < numPlayerUnits; i++) {
      let row = 1 + i; 
      let col = 1;     
      this.addUnit(row, col, 'player', mission.playerUnits[i].moveRange, mission.playerUnits[i].health, mission.playerUnits[i].attack, mission.playerUnits[i].type);
    }

    for (let i = 0; i < numAIUnits; i++) {
      let row = this.grid.height - 2 - i; 
      let col = this.grid.width - 2;      
      this.addUnit(row, col, 'ai', mission.aiUnits[i].moveRange, mission.aiUnits[i].health, mission.aiUnits[i].attack, mission.aiUnits[i].type);
    }
  }

  placeInitialUnits() {
  }

  addUnit(row, col, type, moveRange, health, attack, unitType) {
    const unit = new Unit(row, col, type, moveRange, health, attack, unitType);
    this.units.push(unit);
    this.grid.setCell(row, col, unit);
    unit.placeUnit(this.grid);
  }

  setupEventListeners() {
    const gridContainer = document.getElementById('grid');
    gridContainer.addEventListener('click', (event) => {
      const cell = event.target.closest('.cell');
      if (!cell) return;

      const row = parseInt(cell.dataset.row);
      const col = parseInt(cell.dataset.col);

      this.handleCellClick(row, col);
    });

    document.getElementById('next-mission-button').addEventListener('click', () => {
      this.nextMission();
    });
  }

  handleCellClick(row, col) {
    const clickedUnit = this.grid.getCell(row, col);

    if (this.selectedUnit) {
      if (clickedUnit && clickedUnit.type !== this.selectedUnit.type) {
        this.selectedUnit.attackUnit(clickedUnit, this);
        
        if (this.units.filter(unit => unit.type === 'ai').length === 0) {
          this.nextMission();
        } else {
          this.endTurn();
        }
      }
      else if (this.isValidMove(this.selectedUnit, row, col)) {
        this.moveUnit(this.selectedUnit, row, col);
        this.endTurn();
      } else {
        this.clearSelection();
      }
    } else if (clickedUnit && clickedUnit.type === 'player' && this.turn === 'player') {
      this.selectUnit(clickedUnit);
    }
  }

  isValidMove(unit, newRow, newCol) {
    const distance = Math.abs(newRow - unit.row) + Math.abs(newCol - unit.col);
    return distance <= unit.moveRange && !this.grid.isCellOccupied(newRow, newCol);
  }

  moveUnit(unit, newRow, newCol) {
    this.grid.setCell(unit.row, unit.col, null);
    unit.move(this.grid, newRow, newCol);
    this.grid.setCell(newRow, newCol, unit);
    this.clearSelection();
  }

  selectUnit(unit) {
    this.clearSelection();
    this.selectedUnit = unit;
    const cellElement = this.grid.getGridElement(unit.row, unit.col);
    cellElement.classList.add('selected');
  }

  clearSelection() {
    this.selectedUnit = null;
    this.grid.resetCellStyles();
  }

  endTurn() {
    this.clearSelection();
    this.turn = this.turn === 'player' ? 'ai' : 'player';
    this.updateTurnDisplay();

    if (this.units.filter(unit => unit.type === 'ai').length === 0) {
      return; 
    }

    if (this.turn === 'ai') {
      setTimeout(() => {
        this.ai.takeTurn();
      }, 500); 
    }
  }

  updateTurnDisplay() {
    document.getElementById('turn').textContent = this.turn === 'player' ? 'Jugador' : 'AI';
  }

  nextMission() {
    this.currentMissionIndex++;
    if (this.currentMissionIndex >= this.campaigns[this.currentCampaignIndex].missions.length) {
      this.currentMissionIndex = 0;
      this.currentCampaignIndex++;

      if (this.currentCampaignIndex >= this.campaigns.length) {
        alert("¡Has completado todas las campañas!");
        this.currentCampaignIndex = 0; 
      }
    }

    this.loadMission();
    this.updateMissionUI();
  }

  updateMissionUI() {
    const campaign = this.campaigns[this.currentCampaignIndex];
    const mission = campaign.missions[this.currentMissionIndex];

    document.getElementById('campaign-name').textContent = campaign.name;
    document.getElementById('mission-number').textContent = this.currentMissionIndex + 1;
    document.getElementById('mission-description').textContent = mission.description;

    // Actualizar el fondo de la grilla según la misión
    const grid = document.getElementById('grid');
    grid.className = 'grid'; // Resetear clases
    
    // Añadir clase específica según la misión
    switch(mission.name) {
      case "El Primer Grito (1810)":
        grid.classList.add('mision-cabildo');
        break;
      case "Cruce de los Andes (1817)":
        grid.classList.add('mision-andes');
        break;
      case "Batalla de Chacabuco (1817)":
        grid.classList.add('mision-chacabuco');
        break;
      case "Batalla de Cancha Rayada (1818)":
        grid.classList.add('mision-cancha-rayada');
        break;
      case "Batalla de Maipú (1818)":
        grid.classList.add('mision-maipu');
        break;
      case "Asalto a Buenos Aires (1828)":
        grid.classList.add('mision-buenos-aires');
        break;
      case "Batalla de El Tala (1829)":
        grid.classList.add('mision-el-tala');
        break;
      case "Defensa de Santa Fe (1830)":
        grid.classList.add('mision-defensa-santa-fe');
        break;
      case "Batalla de Oncativo (1830)":
        grid.classList.add('mision-batalla-oncativo');
        break;
      case "Caza de los Unitarios (1831)":
        grid.classList.add('mision-caza-unitarios');
        break;
      case "Infiltración en zona enemiga":
        grid.classList.add('mision-infiltracion');
        break;
      case "Rescate de rehenes":
        grid.classList.add('mision-rescate-rehenes');
        break;
      case "Asalto a una base enemiga":
        grid.classList.add('mision-asalto-base');
        break;
      case "Escape de la emboscada":
        grid.classList.add('mision-escape-emboscada');
        break;
      case "Eliminación del comandante enemigo":
        grid.classList.add('mision-eliminacion-comandante');
        break;
      case "Desembarco en las Malvinas":
        grid.classList.add('mision-desembarco-malvinas');
        break;
      case "Batalla de Goose Green":
        grid.classList.add('mision-batalla-goose-green');
        break;
      case "Operación Black Buck":
        grid.classList.add('mision-operacion-black-buck');
        break;
      case "Combate en Monte Longdon":
        grid.classList.add('mision-combate-monte-longdon');
        break;
      case "Última resistencia en Puerto Argentino":
        grid.classList.add('mision-ultima-resistencia-puerto-argentino');
        break;
      default:
        grid.className = 'grid'; // Resetear clases
    }

    // Actualizar el estilo del body y el título según la campaña
    switch (campaign.name) {
      case "Guerra de Independencia (1810-1818)":
        document.body.style.backgroundColor = "#ffdcdc";
        const h1Element = document.querySelector('h1');
        h1Element.style.borderBottom = "3px solid #ff2121";
        break;
      case "Guerra Civil (1828-1831)":
        document.body.style.backgroundColor = "#a7a7a7ce";
        const h1Element2 = document.querySelector('h1');
        h1Element2.style.borderBottom = "3px solid #808080";
        break;
      case "Guerra del Paraguay (1864-1870)":
        document.body.style.backgroundColor = "#7c9aa8";
        const h1Element3 = document.querySelector('h1');
        h1Element3.style.borderBottom = "3px solid #22759b";
        break;
      case "Guerra de Malvinas (1982)":
        document.body.style.backgroundColor = "#678b73";
        const h1Element4 = document.querySelector('h1');
        h1Element4.style.borderBottom = "3px solid #167e39";
        break;
      default:
        document.body.style.backgroundColor = "#ffffff";
        const h1Element5 = document.querySelector('h1');
        h1Element5.style.borderBottom = "3px solid #000000";
    }

    this.updateUnitInfoUI(mission.playerUnits, mission.aiUnits);
  }

  updateUnitInfoUI(playerUnits, aiUnits) {
    this.updateUnitCard('player-unit-card', playerUnits);
    this.updateUnitCard('ai-unit-card', aiUnits);
  }

  updateUnitCard(cardId, units) {
    const unitCard = document.getElementById(cardId);
    unitCard.innerHTML = ''; 

    units.forEach(unit => {
      const unitInfo = document.createElement('div');
      unitInfo.classList.add('unit-info-item');

      const title = document.createElement('h4');
      title.textContent = unit.type.charAt(0).toUpperCase() + unit.type.slice(1); 
      unitInfo.appendChild(title);

      const type = document.createElement('p');
      type.textContent = `Tipo: ${unit.type}`;
      unitInfo.appendChild(type);

      const move = document.createElement('p');
      move.textContent = `Movimiento: ${unit.moveRange}`;
      unitInfo.appendChild(move);

      const attack = document.createElement('p');
      attack.textContent = `Ataque: ${unit.attack}`;
      unitInfo.appendChild(attack);

      const health = document.createElement('p');
      health.textContent = `Vida: ${unit.health}`;
      unitInfo.appendChild(health);

      unitCard.appendChild(unitInfo);
    });
  }
}