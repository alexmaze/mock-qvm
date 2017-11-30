const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEogIBAAKCAQEAgmbhCozHDMmLZuEbZ4fu3zDSingivUZK/ho9aEgP9iLUlM7V
Rzmk3BjcqGKiBlgGfSMug8osbS8mwOEUZhTjj1XEg1dw/u5g/U6w60J7czT/Uv0z
Yg1hWZA3z6L5ei+bbKjffUofhxo0LzdDX7pNoSp3jtCyfMh7+lJZZQMOKga9DOIx
tOkge64+w2GyF+0IRmpGQHQGbpB4gPDPWiBB31XcVBcaeoopJGf3Nq7xx1F+PkfL
g9KZv3fD4L6hijJuR1eRMEdtN1fxuhoMtFikug9B/wry2QLkCuQFodwKS9JNHFYG
VFm57iTUToiw0pDI6cWgYNrudOYBQlYwVSU1nwIDAQABAoIBAF3CPNJKECBYlTue
ZQbWjOC7CNZ4tHmknez/zuE41wkhV/m6kUzJ3IhH8/e6G0c2aUv2TM6DQdgrS9Do
xLL1F/0KLOZGq78QhHn852XwAjT+iQoRda1tc25jLE3Fn1zD+BtzfGVoMyz/oT/F
m1Kr8H8NurLbyUnBGKsOJKplPPznmVS3e87EpBEmyVpksCemugkuqbZcaxKij2KE
TsIJ4nDPWpJjXWk5EntAz0+hWUEqrFatvnuQ4R/Q4Dksfc72VDqrfSqaInElcPAi
PEGKcBJJyPshveGNKrm9axVBn5UrBSQIj7y7O2Hr13Fel+ePP3nBYmfCYUFTP/y0
wjhEKcECgYEA337qX6emKbVRVSp5IzTK7axXsCOaF3pRH48st6yA4bkESfPe6Dp1
9YV6zfzC7nQ09+VQCvcZCR9OffPms3tbviuCEQfW4mcoE8JZ7qaZ3Ye6R2Y7qrdC
/HFH17Rn7x+2TypeqIKEJN1wnN57K7nkfuOrseU30mWkiigNXvp7Ar8CgYEAlV3v
/pEldY5qog/2i3DkecZGktjyHM/vvBkxkr784JVP82K/AeaCwtxeuypvTwGptzVa
7WxSUNtYrJ8cudBAc/vTSPAyiYYtIOLa2aZ2qNWEtc/54AE5GqAn5XBt+pIxuLmt
rUt5sOACJJnY6ZNZyT/oQ4s7At/n63aNKyRr5SECgYAm00xx65ThH/+OFP/QTuaF
3W+qSLUHKReYrO2uxsfo7pRBKJ1rqGQ/j72itStD82oUOoDqNrzhqc+f79P/EAoD
AlnpDXyV/ienLxcib0zBgEerCaaJ5KY9Zox9e3imwNKR9CFXkrzUDqf2iGvLT9LS
/Egiclh9M20fFxAjlM3zzwKBgA0EsvYtEGa+kuytF3/vxvoWHfCOmAuK1ApA5+Ey
ZDfuy5ka8iroPF1fd6I4gJsSOgiNze8DkekaNRBWjdpkHDn/qNqilMUHvMcw/oIZ
0B3G/loaVlz/vkpjyxZkRjGgrFS9WjXQbjrMS2OFRTKWdSzlNQkuCWamvT/4hTVN
Z1oBAoGAVF1yMYEHruPMDTG/mweWNJnypwccg4zq7LWv0/grlb6oYL/05pGjoy6M
Cy6l0TFrObuajVCR4dzwHe6ed93MoVNmhoSUxNOY4Eb7vzxwVZEONMn25TYgWKJ2
+X+ELYgPF77It45CbX7W7434GKp/2+zXoHcqXP09zi+u0sA8iW4=
-----END RSA PRIVATE KEY-----`

exports.list = {
  page: 1,
  total: 10,
  data: [
    {
      id: "kp01",
      key_pair_finger_print: "a562406dd52532a45bf469fd45117500",
      public_key_body:
        "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQChYaZjH0O5O9dYO/uvHqo1zf8v39zYPBWxdNBLKCMWA08lyeVA/ZzYrAOCcQ6DjsReM5R4x7+sRgs8t8PFwbEPhWTKw0JFqpngZU2ipxg65rAc7zqssqysVSrz9ex1Io0pWP6O20k7j4mrsUtpS3UAAqKPt0V6kdpBY0d+0yy4t1vRfswZJc5uoaVmORqczQCriQKoIBIVH1fh1HAzFtsvTttXNAsWUjOW1Ptq9il0nefOFOU95wLbf8tmxhLkdXeyDOe8bmPqzjLlrMKoDcQEy4usqS+FWD8zsO1UAo9ntGGBfQm+iLCx56Z4HEqIwH0tdc2ZF4rUV0uLUplKDs35 imported-openssh ",
      key_pair_name: "keypair_1"
    },
    {
      id: "kp02",
      key_pair_finger_print: "2814fd6c0d43673de5f6ee74eff938d9",
      public_key_body: privateKey,
      key_pair_name: "keypair_2"
    }
  ],
  size: 10
}

exports.create = {
  data: {
    key_pair_finger_print: "2814fd6c0d43673de5f6ee74eff938d9",
    key_pair_name: "keypair_3",
    private_key_body: privateKey,
    public_key_body: privateKey
  }
}
