## Resultados dos Testes de Performance com 4 Clusters

| Teste | Total de Requests | Requests 200 | Erros (incluindo timeouts) | Porcentagem de Erro |
|-------|-------------------|--------------|-----------------------------|----------------------|
| 1     | 47k               | 43,229       | 3k (0 timeouts)             | 6.38%                |
| 2     | 46k               | 42,485       | 3k (0 timeouts)             | 6.52%                |
| 3     | 46k               | 42,935       | 3k (0 timeouts)             | 6.52%                |
| 4     | 46k               | 42,499       | 3k (0 timeouts)             | 6.52%                |
| 5     | 46k               | 42,542       | 3k (0 timeouts)             | 6.52%                |
| 6     | 45k               | 41,838       | 3k (0 timeouts)             | 6.67%                |
| 7     | 47k               | 42,967       | 4k (0 timeouts)             | 8.51%                |
| 8     | 46k               | 42,925       | 3k (0 timeouts)             | 6.52%                |
| 9     | 46k               | 43,118       | 3k (0 timeouts)             | 6.52%                |
| 10    | 46k               | 42,786       | 3k (0 timeouts)             | 6.52%                |
| Média | 46.1k             | 42.832k      | 3.1k                        | 6.36%                |

Aumentei e diminuí a quantidade de clusters, porém não houve mudanças significativas, mantendo o número de erros na casa dos 3 mil.