function FindProxyForURL(url, host) {

  if (url.startsWith("http://www.saurabh"))
    return "PROXY http-proxy.mydomain.com:8080";

  else
    return "DIRECT";

}