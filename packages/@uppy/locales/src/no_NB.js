const no_NB = {}

no_NB.strings = {
  addMore: 'Legg til flere',
  addMoreFiles: 'Legg til flere filer',
  addingMoreFiles: 'Legger til flere filer',
  allowAccessDescription: 'For å ta bilder eller spille inn video må du gi dette nettstedet tillatelse til å bruke kameraet ditt.',
  allowAccessTitle: 'Vennligst gi tillatelse til å bruke kamerat ditt',
  authenticateWith: 'Koble til %{pluginName}',
  authenticateWithTitle: 'Vennligst autentiser med %{pluginName} for å velge filer',
  back: 'Tilbake',
  browse: 'bla gjennom',
  cancel: 'Avbryt',
  cancelUpload: 'Avbryt opplasting',
  chooseFiles: 'Velg filer',
  closeModal: 'Lukk vindu',
  companionAuthError: 'Autentisering påkrevd',
  companionError: 'Tilkobling med Companion feilet',
  companionUnauthorizeHint: 'For å autentisere din %{provider} konto, vennligst gå til %{url}',
  complete: 'Fullført',
  connectedToInternet: 'Tilkoblet internett',
  copyLink: 'Kopier lenke',
  copyLinkToClipboardFallback: 'Kopier URLen nedenfor',
  copyLinkToClipboardSuccess: 'Lenke kopiert til utklippstavlen',
  creatingAssembly: 'Forbereder opplasting...',
  creatingAssemblyFailed: 'Transloadit: Kunne ikke generere Assembly',
  dashboardTitle: 'Filopplaster',
  dashboardWindowTitle: 'Vindu for filopplaster (Trykk escape for å lukke)',
  dataUploadedOfTotal: '%{complete} av %{total}',
  done: 'Ferdig',
  dropHereOr: 'Slipp filer her eller %{browse}',
  dropHint: 'Slipp filer her',
  dropPaste: 'Slipp filer her, lim inn eller %{browse}',
  dropPasteImport: 'Slipp filer her, lim inn, %{browse} eller importer fra',
  edit: 'Rediger',
  editFile: 'Rediger fil',
  editing: 'Redigerer %{file}',
  emptyFolderAdded: 'Ingen filer ble lagt til fra den tomme mappen',
  encoding: 'Enkoder...',
  enterCorrectUrl: 'Feil URL: Vennligst pass på at du oppgir en lenke direkte til en fil',
  enterUrlToImport: 'Oppgi URL for å importere fil',
  exceedsSize: 'Denne filen overskrider den maksimalt tillate størrelse på',
  failedToFetch: 'Companion mislyktes i å hente denne URLen, vennligst sjekk at den er riktig',
  failedToUpload: 'Opplasting av %{file} mislyktes',
  fileSource: 'Filkilde: %{name}',
  filesUploadedOfTotal: {
    '0': '%{complete} av %{smart_count} filer lastet opp',
    '1': '%{complete} av %{smart_count} fil lastet opp',
    '2': '%{complete} av %{smart_count} filer lastet opp'
  },
  filter: 'Filter',
  finishEditingFile: 'Avslutt redigering av fil',
  folderAdded: {
    '0': 'La til %{smart_count} filer fra %{folder}',
    '1': 'La til %{smart_count} fil fra %{folder}',
    '2': 'La til %{smart_count} filer fra %{folder}'
  },
  generatingThumbnails: 'Genererer miniatyrer...',
  import: 'Importer',
  importFrom: 'Importer fra %{name}',
  link: 'Lenke',
  loading: 'Laster...',
  logOut: 'Logg ut',
  myDevice: 'Min enhet',
  noFilesFound: 'Du har ingen filer eller mapper her',
  noInternetConnection: 'Ingen tilkobling til internett',
  openFolderNamed: 'Åpne mappe %{name}',
  pause: 'Pause',
  pauseUpload: 'Pause opplasting',
  paused: 'Pauset',
  poweredBy: 'Powered by',
  preparingUpload: 'Forbereder opplasting...',
  processingXFiles: {
    '0': 'Behandler %{smart_count} filer',
    '1': 'Behandler %{smart_count} fil',
    '2': 'Behandler %{smart_count} filer'
  },
  recordingLength: 'Opptaksvarighet %{recording_length}',
  removeFile: 'Fjern fil',
  resetFilter: 'Nullstill filter',
  resume: 'Fortsett',
  resumeUpload: 'Fortsett opplasting',
  retry: 'Prøv på nytt',
  retryUpload: 'Prøv opplasting på nytt',
  saveChanges: 'Lagre endringer',
  selectAllFilesFromFolderNamed: 'Velg alle filer fra mappen %{name}',
  selectFileNamed: 'Velg fil %{name}',
  selectX: {
    '0': 'Velg %{smart_count}',
    '1': 'Velg %{smart_count}',
    '2': 'Velg %{smart_count}'
  },
  smile: 'Smil!',
  startRecording: 'Start videoopptak',
  stopRecording: 'Stopp videoopptak',
  takePicture: 'Ta et bilde',
  timedOut: 'Opplasting stagnerte i %{seconds} sekunder, avbryter.',
  unselectAllFilesFromFolderNamed: 'Avmarker alle filer i mappen %{name}',
  unselectFileNamed: 'Avmarker fil %{name}',
  upload: 'Last opp',
  uploadComplete: 'Opplasting fullført',
  uploadFailed: 'Opplasting feilet',
  uploadPaused: 'Opplasting pauset',
  uploadXFiles: {
    '0': 'Last opp %{smart_count} filer',
    '1': 'Last opp %{smart_count} fil',
    '2': 'Last opp %{smart_count} filer'
  },
  uploadXNewFiles: {
    '0': 'Last opp +%{smart_count} filer',
    '1': 'Last opp +%{smart_count} fil',
    '2': 'Last opp +%{smart_count} filer'
  },
  uploading: 'Laster opp',
  uploadingXFiles: {
    '0': 'Laster opp %{smart_count} filer',
    '1': 'Laster opp %{smart_count} fil',
    '2': 'Laster opp %{smart_count} filer'
  },
  xFilesSelected: {
    '0': '%{smart_count} filer valgt',
    '1': '%{smart_count} fil valgt',
    '2': '%{smart_count} filer valgt'
  },
  xMoreFilesAdded: {
    '0': '%{smart_count} flere filer lagt til',
    '1': '%{smart_count} flere fil lagt til',
    '2': '%{smart_count} flere filer lagt til'
  },
  xTimeLeft: '%{time} igjen',
  youCanOnlyUploadFileTypes: 'Du kan bare laste opp: %{types}',
  youCanOnlyUploadX: {
    '0': 'Du kan bare laste opp %{smart_count} filer',
    '1': 'Du kan bare laste opp %{smart_count} fil',
    '2': 'Du kan bare laste opp %{smart_count} filer'
  },
  youHaveToAtLeastSelectX: {
    '0': 'Du må velge minst %{smart_count} filer',
    '1': 'Du må velge minst %{smart_count} fil',
    '2': 'Du må velge minst %{smart_count} filer'
  }
}

no_NB.pluralize = function (n) {
  if (n === 1) {
    return 1
  }
  return 0
}

if (typeof window !== 'undefined' && typeof window.Uppy !== 'undefined') {
  window.Uppy.locales.no_NB = no_NB
}

module.exports = no_NB
