function FindProxyForURL(url, host) {

  if (url.startsWith("http://www.saurabh"))
    return "PROXY w3proxy.mozilla.org:8080";

  else
    return "DIRECT";

}
